import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  public async findAll(): Promise<CategoryDto[]> {
    return this.categoryService.findAll();
  }

  @Post()
  public async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    return this.categoryService.create(createCategoryDto);
  }

  @Delete(':categoryId')
  public async delete(@Param('categoryId') categoryId: number): Promise<boolean> {
    return this.categoryService.delete(categoryId);
  }
}
