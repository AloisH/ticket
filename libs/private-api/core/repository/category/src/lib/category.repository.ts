import { CategoryModel } from './model/category.model';
import { CreateCategoryModel } from './model/create-category.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ticket/private-api/core/prisma';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findById(categoryId: number): Promise<CategoryModel> {
    return this.prisma.category.findUnique({
      where: { id: categoryId },
    });
  }

  public async findByName(categoryName: string): Promise<CategoryModel> {
    return this.prisma.category.findUnique({
      where: { name: categoryName },
    });
  }

  public async findAll(): Promise<CategoryModel[]> {
    return this.prisma.category.findMany();
  }

  public async create(createCategoryModel: CreateCategoryModel): Promise<CategoryModel> {
    return this.prisma.category.create({
      data: createCategoryModel,
    });
  }

  public async delete(categoryId: number) {
    return this.prisma.category.delete({
      where: { id: categoryId },
    });
  }
}
