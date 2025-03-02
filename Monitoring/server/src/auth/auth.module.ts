import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { ConformitiesModule } from "src/conformities/conformities.module";
import { JwtModule } from "@nestjs/jwt";
import { JWT_TOKEN } from "src/lib/config/ldap/config";

@Module({
  imports: [
    UsersModule,
    ConformitiesModule,
    JwtModule.register({
      global: true,
      secret: JWT_TOKEN,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
