import { CategoryRepository } from './category.repository';
import { Module } from '@nestjs/common';
import { PrivateApiCorePrismaModule } from '@ticket/private-api/core/prisma';

@Module({
  imports: [PrivateApiCorePrismaModule],
  providers: [CategoryRepository],
  exports: [CategoryRepository],
})
export class PrivateApiCoreRepositoryCategoryModule {}
