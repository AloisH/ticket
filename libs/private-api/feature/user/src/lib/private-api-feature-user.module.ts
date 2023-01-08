import { Module } from '@nestjs/common';
import { PrivateApiCoreRepositoryUserModule } from '@ticket/private-api/core/repository/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrivateApiCoreRepositoryUserModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class PrivateApiFeatureUserModule {}
