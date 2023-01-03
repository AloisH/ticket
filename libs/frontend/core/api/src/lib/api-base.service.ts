import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiBaseService {
  protected url: string;

  constructor(protected readonly apiService: ApiService) {
    this.url = '';
  }
}
