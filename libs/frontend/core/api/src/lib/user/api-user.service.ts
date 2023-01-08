import { ApiBaseService } from '../api-base.service';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUserDto } from './api-user.dto';
import { UserDto } from '../auth/api-auth.dto';

@Injectable({ providedIn: 'root' })
export class ApiUserService extends ApiBaseService {
  constructor(apiService: ApiService) {
    super(apiService);
    this.url = 'user';
  }

  public findMe(): Observable<UserDto> {
    return this.apiService.get(`${this.url}/me`);
  }

  public updateMe(updateUserDto: UpdateUserDto) {
    return this.apiService.post(`${this.url}/me`, updateUserDto);
  }
}
