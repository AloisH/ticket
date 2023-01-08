import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor() {
    return;
  }

  public async findAll(): Promise<CategoryDto[]> {
    return;
  }

  public async create(createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    return;
  }

  public async delete(categoryId: number): Promise<boolean> {
    return;
  }
}
