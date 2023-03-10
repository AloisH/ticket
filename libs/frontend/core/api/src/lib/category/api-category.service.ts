import { CategoryDto, CreateCategoryDto } from './api-category.dto';

import { ApiBaseService } from '../api-base.service';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiCategoryService extends ApiBaseService {
  constructor(apiService: ApiService) {
    super(apiService);
    this.url = 'category';
  }

  public findAll(): Observable<CategoryDto[]> {
    return this.apiService.get(this.url);
  }

  public create(categoryDto: CreateCategoryDto): Observable<CategoryDto> {
    return this.apiService.post(this.url, categoryDto);
  }

  public delete(categoryId: number): Observable<boolean> {
    return this.apiService.delete(`${this.url}/${categoryId}`);
  }
}
