import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from "@nestjs/common";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();

    return response.status(404).json({
      statusCode: 404,
      path: ctx.getRequest().url,
      message: "Такого ресурса нет прошу использовать описание swagger",
    });
  }
}
