import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ConformitiesModule } from 'src/conformities/conformities.module';

@Module({
  imports: [UsersModule, ConformitiesModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
