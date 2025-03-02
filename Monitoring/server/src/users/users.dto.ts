import { IsString, IsInt } from "class-validator";

interface ISession {
  id: string;
  login: string;
  grId: string;
  info: any;
  rights?: Array<string>;
}

declare module "express-session" {
  interface SessionData {
    user: ISession;
  }
}

export class CreateUserDto {
  @IsString()
  test1: string;

  @IsInt()
  test2: number;
}
