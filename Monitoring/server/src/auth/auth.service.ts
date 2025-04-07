import { Injectable, UnauthorizedException } from "@nestjs/common";
import { checkHash, hashed, addDays } from "@lib/utils/halperFn";
import { UserService } from "@src/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { ldap } from "@src/lib/config/ldap/ldapConnect";
import { LIFE_TIME_HASH } from "@src/lib/config/ldap/config";
import { Users } from "@src/user/user.model";
import { GroupConfService } from "@src/group-conf/group-conf.service";
import { UserConfService } from "@src/user-conf/user-conf.service";


@Injectable()
export class AuthService {
  constructor(
    private userServise: UserService,
    private groupConfService: GroupConfService,
    private jwtService: JwtService,
    private userConfService: UserConfService
  ) {}

  async signIn(
    username: string,
    pass: string
  ): Promise<{ access_token: string | null }> {
    let status = false;
    const ldap = true;
    const user = await this.userServise.findOneLogin(
      username.toLocaleLowerCase().trim()
    );

    if (!user)
      throw new UnauthorizedException(
        `Пользователь ${username} не зарегестрирован !`
      );

    // если у юзера есть нормальный ХЭШ и в время жизни норм
    if (
      ldap &&
      user.hash_password &&
      user.hash_update &&
      new Date() < addDays(new Date(user.hash_update), LIFE_TIME_HASH)
    ) {
      // Если хэш и пароль введеный не совпадает обнуляем и направляем в Ldap
      const check = await checkHash(pass, user.hash_password);
      if (!check) await user.update({ hash_password: null, hash_update: null });
      else status = true;
    } else if (user.hash_password) {
      const check = await checkHash(pass, user.hash_password);
      if (!check) 
        throw new UnauthorizedException(
          `Не правильные учётные данные !`
        )
    }

    // ldap logic
    if (!status && ldap) await this.checkLdap(user, username, pass);

    const rightsGroup = await this.groupConfService.getRights(user.id);
    const rightsUser = await  this.userConfService.getRights(user.id);
    const payload = {
      id: user.id,
      login: user.login,
      name: user.name,
      rights: {
        group: rightsGroup,
        user: rightsUser
      },
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async checkLdap(user: Users, username: string, pass: string) {
    try {
      await user.update({ hash_password: null, hash_update: null });
      const connectLdap = await ldap(username, pass);

      if (connectLdap.status) {
        const hash = await hashed(pass);

        await user.update({
          hash_password: hash,
          info: JSON.parse(JSON.stringify(connectLdap.userData?.[0])),
          hash_update: new Date(),
        });
      } else {
        throw new UnauthorizedException(connectLdap.message);
      }
    } catch (e) {
      throw new Error(`ошибка на стороне сервера ${e.message}`);
    }
  }

  async check(login: string) {
    const user = await this.userServise.findOneLogin(login);

    if (!user) throw new UnauthorizedException(`Пользователь не найден в БД !`);

    const rightsGroup = await this.groupConfService.getRights(user.id);
    const rightsUser = await  this.userConfService.getRights(user.id);

    const payload = {
      id: user.id,
      login: user.login,
      name: user.name,
      info: user.info,
      rights: {
        group: rightsGroup,
        user: rightsUser
      },
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      payload
    };
  }
}
