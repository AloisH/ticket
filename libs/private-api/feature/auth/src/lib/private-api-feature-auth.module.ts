import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PrivateApiCoreRepositoryUserModule } from '@ticket/private-api/core/repository/user';

@Module({
  imports: [PrivateApiCoreRepositoryUserModule, JwtModule.register({}), ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class PrivateApiFeatureAuthModule {}
