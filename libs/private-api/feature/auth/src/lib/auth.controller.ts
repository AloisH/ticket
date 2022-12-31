import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { Jwt, Public, UserId, RefreshTokenGuard } from '@ticket/private-api/core/auth';
import { AuthService } from './auth.service';
import { ActivatedDto } from './dto/activated.dto';
import { LoginDto } from './dto/login.dto';
import { SetPasswordDto } from './dto/set-password.dto';
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

  @Public()
  @Post('login')
  public async login(@Body() loginDto: LoginDto): Promise<TokenDto> {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('activated')
  public async activated(@Body() activatedDto: ActivatedDto): Promise<boolean> {
    return this.authService.activated(activatedDto);
  }

  @Public()
  @Post('set-password')
  public async setPassword(@Body() setPasswordDto: SetPasswordDto): Promise<boolean> {
    return this.authService.setPassword(setPasswordDto);
  }

  @Get('logout')
  public async logout(@UserId() userId: number): Promise<void> {
    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Public()
  @Get('refresh')
  public async refresh(@UserId() userId: number, @Jwt() jwt: string): Promise<TokenDto> {
    return this.authService.refresh(userId, jwt);
  }
}
