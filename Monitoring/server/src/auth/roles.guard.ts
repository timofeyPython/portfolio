import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "./roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [req, res, next] = context.getArgs();
    const roles = this.reflector.get(Roles, context.getHandler());

    if (!req["user"]) return false;

    const findRole = req["user"]?.rights.find((role: string) =>
      roles.find((r) => role === r)
    );

    if (!findRole) throw new UnauthorizedException(`Нет прав! ${roles}`);
    return true;
  }
}
