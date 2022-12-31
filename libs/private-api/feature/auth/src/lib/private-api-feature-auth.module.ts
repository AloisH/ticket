import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PrivateApiCoreRepositoryUserModule } from '@ticket/private-api/core/repository/user';

@Module({
  imports: [PrivateApiCoreRepositoryUserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class PrivateApiFeatureAuthModule {}
