import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  get(): { message: string } {
    return {
      message: "API v1.0.0, App: ITMonitoring, Developer: TimofetWeb.ru",
    };
  }
}
