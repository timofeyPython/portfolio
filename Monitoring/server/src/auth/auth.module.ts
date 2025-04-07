import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { JWT_TOKEN } from "@lib/config/ldap/config";
import { UserService } from "@src/user/user.service";
import { userProviders } from "@src/user/user.providers";
import { groupConfProviders } from "@src/group-conf/group-conf.provider";
import { GroupConfService } from "@src/group-conf/group-conf.service";
import { userConfProviders } from "@src/user-conf/user-conf.provider";
import { UserConfService } from "@src/user-conf/user-conf.service";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_TOKEN,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    GroupConfService,
    UserConfService,
    ...userProviders,
    ...groupConfProviders,
    ...userConfProviders,
  ],
})
export class AuthModule {}
