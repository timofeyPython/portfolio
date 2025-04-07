import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserConfService } from "../user-conf/user-conf.service";
import { UserService } from "../user/user.service";
import { CreateUserDto, UpdateUserDto } from "./types/admin.dto";

@Injectable()
export class AdminService {
  constructor(
    private userServise: UserService,
    private userConfService: UserConfService
  ) {}

  async findUsersAndRights() {
    const users = await this.userServise.findAll();
    const usersAndRights = Promise.all(
      users.map(async (user) => await this.findUserAndRights(user.id))
    );
    return usersAndRights;
  }

  async findUserAndRights(id: string) {
    const user = await this.userServise.findOne(id);
    const rights = await this.userConfService.getRights(id);
    return {
      user,
      rights,
    };
  }

  async createUser({ login, name, role }: CreateUserDto) {
    const findEntry = await this.userServise.findOneLogin(login);
    if (findEntry) throw new HttpException("Entry found", HttpStatus.CONFLICT);

    const createUser = await this.userServise.create({ login, name });
    await this.userConfService.create(createUser.entry.id, role);
    return {
      message: "УЗ создана успешно",
    };
  }

  async updateUser(user: UpdateUserDto & { role: string }) {
    await this.userServise.update(user);
    await this.userConfService.update(user.id, user.role);

    return {
      message: "УЗ Обновлена",
    };
  }

  async deleteUser(id: string) {
    return await this.userServise.delete(id);
  }
}
