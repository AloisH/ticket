import { BadRequestException, Injectable } from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { CategoryRepository } from '@ticket/private-api/core/repository/category';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async findAll(): Promise<CategoryDto[]> {
    return this.categoryRepository.findAll();
  }

  public async create(createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    const category = await this.categoryRepository.findByName(createCategoryDto.name);
    if (category) {
      throw new BadRequestException('Category already exists');
    }

    return this.categoryRepository.create(createCategoryDto);
  }

  public async delete(categoryId: number): Promise<boolean> {
    const category = await this.categoryRepository.findById(categoryId);
    if (!category) {
      throw new BadRequestException('Category does not exist');
    }

    await this.categoryRepository.delete(categoryId);
    return true;
  }
}
