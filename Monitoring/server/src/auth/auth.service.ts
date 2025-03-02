import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConformitiesService } from "src/conformities/conformities.service";
import { checkHash, hashed, addDays } from "src/lib/utils/halperFn";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersServise: UsersService,
    private conformitiesService: ConformitiesService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string
  ): Promise<{ access_token: string | null }> {
    const user = await this.usersServise.findOneLogin(
      username.toLocaleLowerCase().trim()
    );

    if (!user)
      throw new UnauthorizedException(
        `Пользователь ${username} нет зарегестрирован !`
      );

    if (user.hash_password) {
      const check = await checkHash(pass, user.hash_password);
      if (!check) throw new UnauthorizedException(`Не верные учётные данные`);
    }

    const rights = await this.conformitiesService.findAll(user.id);
    const payload = {
      id: user.id,
      login: user.login,
      grId: user.grId,
      info: user.info,
      rights: rights.map((right) => right.rights.name),
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async check(login: string): Promise<{ access_token: string }> {
    const user = await this.usersServise.findOneLogin(login);

    if (!user) throw new UnauthorizedException(`Пользователь не найден в БД !`);

    const rights = await this.conformitiesService.findAll(user.id);
    const payload = {
      id: user.id,
      login: user.login,
      grId: user.grId,
      info: user.info,
      rights: rights.map((right) => right.rights.name),
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
