import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { JWT_TOKEN } from "@lib/config/ldap/config";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token)
      throw new UnauthorizedException(
        "Не авторизован, токен не прошёл проверку"
      );

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: JWT_TOKEN,
      });
      request["user"] = {...payload};
    } catch {
      throw new UnauthorizedException("Не авторизован, внутреняя ошибка");
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
