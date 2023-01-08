import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';
import { PrivateApiCoreRepositoryCategoryModule } from '@ticket/private-api/core/repository/category';

@Module({
  imports: [PrivateApiCoreRepositoryCategoryModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class PrivateApiFeatureCategoryModule {}
