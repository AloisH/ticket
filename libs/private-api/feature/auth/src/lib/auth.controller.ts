import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ActivatedDto } from './dto/activated.dto';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { TokenDto } from './dto/token.dto';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  public async createAccount(@Body() signupDto: SignupDto): Promise<UserDto> {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  public async login(@Body() loginDto: LoginDto): Promise<TokenDto> {
    return this.authService.login(loginDto);
  }

  @Post('activated')
  public async activated(@Body() activatedDto: ActivatedDto): Promise<boolean> {
    return this.authService.activated(activatedDto);
  }

  @Get('logout')
  public async logout(): Promise<void> {
    return this.authService.logout();
  }

  @Get('refresh')
  public async refresh(): Promise<TokenDto> {
    return this.authService.refresh();
  }
}
