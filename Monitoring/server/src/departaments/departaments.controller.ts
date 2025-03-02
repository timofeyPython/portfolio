import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { DepartamentsService } from "./departaments.service";
import { findAllDpDto } from "./departament.dto";

@Controller("departaments")
export class DepartamentsController {
  constructor(private departementService: DepartamentsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(
    @Query()
    findAllDpDto: findAllDpDto
  ) {
    const departament = await this.departementService.findAll(findAllDpDto.dv);
    return departament;
  }
}
