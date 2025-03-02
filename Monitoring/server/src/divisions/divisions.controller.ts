import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { DivisionsService } from "./divisions.service";
import { Roles } from "src/auth/roles.decorator";
import { ERights } from "src/lib/types/enum";
import { findAllDvDto } from "./divisions.dto";

@Controller("divisions")
@UseGuards(AuthGuard, RolesGuard)
export class DivisionsController {
  constructor(private divisionService: DivisionsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  @Roles([ERights.H_O_D])
  async findAll(@Query() findAllDvDto: findAllDvDto) {
    const divisions = await this.divisionService.findAll(findAllDvDto.br);
    return divisions;
  }
}
