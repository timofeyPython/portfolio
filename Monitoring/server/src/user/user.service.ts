import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Users } from "./user.model";
import { hashed } from "@lib/utils/halperFn";
import { CreateUserDto, UpdateUserDto } from "./types/users.dto";
import { EDBNameTable } from "@lib/types/enum";

@Injectable()
export class UserService {
  constructor(
    @Inject(EDBNameTable.USERS_TABLE)
    private readonly userModel: typeof Users
  ) {}

  async findAll() {
    const entries = await this.userModel.findAll({order: [["login", "DESC"]]});
    return entries.map(({ id, login, name, info }) => ({
      id,
      login,
      name,
      info,
    }));
  }

  async findOneLogin(login: string) {
    const result = await this.userModel.findOne({
      where: { login },
    });
    return result;
  }

  async findOne(id: string) {
    const entry = await this.userModel.findOne({
      where: { id },
    });
    if (!entry) throw new HttpException("Entry not found", HttpStatus.CONFLICT);

    return {
      id: entry.id,
      login: entry.login,
      name: entry.name,
      info: entry.info
    };
  }

  async create({ login, name, password }: CreateUserDto) {
    await this.findOneLogin(login);
    const user = await this.userModel.create({
      login,
      name,
      hash_password: password ? await hashed(password) : null,
    });
    return {
      message: `УЗ ${login} создана`,
      entry: user
    };
  }

  async update({ id, name, login }: UpdateUserDto) {
    await this.userModel.findOne({ where: { id } });
    await this.userModel.update(
      {
        name,
        login,
      },
      { where: { id } }
    );
    return {
      message: `УЗ ${login} обновлена`,
      entry: await this.findOne(id),
    };
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.userModel.destroy({ where: { id } });

    return {
      message: `УЗ ${id} удалена`,
    };
  }
}
