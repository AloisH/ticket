import * as argon from 'argon2';

import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { UserModel, UserRepository } from '@ticket/private-api/core/repository/user';

import { ActivatedDto } from './dto/activated.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Public } from '@ticket/private-api/core/auth';
import { SetPasswordDto } from './dto/set-password.dto';
import { SignupDto } from './dto/signup.dto';
import { TokenDto } from './dto/token.dto';
import { UserDto } from './dto/user.dto';

interface JwtPayload {
  id: number;
  role: string;
  permissionRole: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  public async signup(signupDto: SignupDto): Promise<UserDto> {
    const userAlreadyExists = await this.userRepository.findByEmail(signupDto.email);
    if (userAlreadyExists) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.userRepository.create({ ...signupDto, permissionRole: 'user', passwordSet: false });

    return user;
  }

  public async login(loginDto: LoginDto): Promise<TokenDto> {
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
      throw new BadRequestException('User or password does not exist');
    }

    if (!user.passwordSet) {
      throw new BadRequestException('User has not set password');
    }

    const passwordValid = await argon.verify(user.passwordHash, loginDto.password);
    if (!passwordValid) {
      throw new BadRequestException('User or password does not exist');
    }

    const tokens = await this.generateToken(user);
    await this.updateToken(user.id, tokens.refreshToken);

    return tokens;
  }

  @Public()
  public async activated(activatedDto: ActivatedDto): Promise<boolean> {
    const user = await this.userRepository.findByEmail(activatedDto.email);
    if (!user) {
      return true;
    }

    return user.passwordSet;
  }

  public async setPassword(setPasswordDto: SetPasswordDto): Promise<boolean> {
    const user = await this.userRepository.findByEmail(setPasswordDto.email);
    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    if (user.passwordSet) {
      throw new BadRequestException('User has already set password');
    }

    const passwordHash = await argon.hash(setPasswordDto.password);
    await this.userRepository.update(user.id, { passwordHash, passwordSet: true });

    return true;
  }

  public async logout(userId: number): Promise<void> {
    await this.userRepository.update(userId, { refreshToken: null });
  }

  public async refresh(userId: number, refreshToken: string): Promise<TokenDto> {
    const user = await this.userRepository.findById(userId);
    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Access denied');
    }

    const refreshTokenValid = await argon.verify(user.refreshToken, refreshToken);
    if (!refreshTokenValid) {
      throw new ForbiddenException('Access denied');
    }

    const tokens = await this.generateToken(user);
    await this.updateToken(user.id, tokens.refreshToken);

    return tokens;
  }

  private async generateToken(user: UserModel): Promise<TokenDto> {
    const jwtPayload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
      permissionRole: user.permissionRole,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRES_IN'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get('REFRESH_JWT_SECRET'),
        expiresIn: this.configService.get('REFRESH_JWT_EXPIRES_IN'),
      }),
    ]);

    return { accessToken, refreshToken };
  }

  public async updateToken(userId: number, refreshToken: string): Promise<void> {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.userRepository.update(userId, { refreshToken: hashedRefreshToken });
  }
}
