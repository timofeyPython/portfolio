import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { QuestionnaireService } from "./questionnaire.service";
import { PostBodyDto } from "./questionnaire.dto";

@Controller("questionnaire")
export class QuestionnaireController {
  constructor(private readonly QuestionnaireService: QuestionnaireService) {}

  @Get()
  async getAll() {
    return await this.QuestionnaireService.findAll();
  }

  @Get(":id")
  async getOne(@Param("id") id: string) {
    return await this.QuestionnaireService.findOne(id);
  }

  @Post()
  async checkTest(@Body() testingDto: PostBodyDto) {
    return await this.QuestionnaireService.checkTest(testingDto);
  }
}
