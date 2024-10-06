import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
      ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);
      }
}

function validateRequest(request: any): boolean | Promise<boolean> | Observable<boolean> {
    if (!request.session?.user)
      throw new UnauthorizedException(`Сессия не установлена!`)
    return true
}
