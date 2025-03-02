import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { InfoService } from "./info.service";

@Controller("info")
@UseGuards(AuthGuard)
export class InfoController {
  constructor(private infoService: InfoService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async get(@Req() request: Request) {
    const info = request["user"];

    return {
      roles: info.rights,
      id: info.id,
      grId: info.grId,
      info: info.info,
      login: info.login,
      name: info?.info?.displayname,
    };
  }
}
