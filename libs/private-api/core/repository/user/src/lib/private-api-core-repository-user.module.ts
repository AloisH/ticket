import { Module } from '@nestjs/common';
import { PrivateApiCorePrismaModule } from '@ticket/private-api/core/prisma';
import { UserRepository } from './user.repository';

@Module({
  imports: [PrivateApiCorePrismaModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class PrivateApiCoreRepositoryUserModule {}
