import { Injectable } from "@nestjs/common";
import { Users } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private readonly userModel: typeof Users
  ) {}

  async findAll() {
    const result = await this.userModel.findAll();
    return result;
  }

  async findOneLogin(login: string) {
    const result = await this.userModel.findOne({
      where: { login },
    });
    return result;
  }

  async findOne(id: string) {
    const result = await this.userModel.findOne({
      where: { id },
    });
    return result;
  }
}
