import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { TokenDto } from './dto/token.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  public async signup(signupDto: SignupDto): Promise<UserDto> {
    return;
  }

  public async login(loginDto: LoginDto): Promise<TokenDto> {
    return;
  }

  public async activated(): Promise<boolean> {
    return;
  }

  public async logout(): Promise<void> {
    return;
  }

  public async refresh(): Promise<TokenDto> {
    return;
  }
}
