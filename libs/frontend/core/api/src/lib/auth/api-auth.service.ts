import { ActivatedDto, LoginDto, SetPasswordDto, SignupDto, TokenDto, UserDto } from './api-auth.dto';

import { ApiBaseService } from '../api-base.service';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiAuthService extends ApiBaseService {
  constructor(apiService: ApiService) {
    super(apiService);
    this.url = 'auth';
  }

  public createAccount(signupDto: SignupDto): Observable<UserDto> {
    return this.apiService.post(`${this.url}/signup`, signupDto);
  }

  public login(loginDto: LoginDto): Observable<TokenDto> {
    return this.apiService.post(`${this.url}/login`, loginDto);
  }

  public activated(activatedDto: ActivatedDto): Observable<boolean> {
    return this.apiService.post(`${this.url}/activated`, activatedDto);
  }

  public setPassword(setPasswordDto: SetPasswordDto): Observable<boolean> {
    return this.apiService.post(`${this.url}/set-password`, setPasswordDto);
  }

  public logout(): Observable<void> {
    return this.apiService.get(`${this.url}/logout`);
  }

  public refresh(): Observable<TokenDto> {
    return this.apiService.get(`${this.url}/refresh`);
  }
}
