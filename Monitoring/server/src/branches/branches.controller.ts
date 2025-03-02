import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { BranchesService } from "./branches.service";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";
import { ERights } from "src/lib/types/enum";

@Controller("branches")
@UseGuards(AuthGuard, RolesGuard)
export class BranchesController {
  constructor(private branchService: BranchesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  @Roles([ERights.H_O_D])
  async getAll() {
    const branches = await this.branchService.findAll();
    return branches;
  }
}
