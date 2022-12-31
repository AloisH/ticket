import { BadRequestException, Injectable } from '@nestjs/common';

import { ActivatedDto } from './dto/activated.dto';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { TokenDto } from './dto/token.dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from '@ticket/private-api/core/repository/user';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

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
      throw new BadRequestException('User does not exist');
    }

    if (!user.passwordSet) {
      throw new BadRequestException('User has not set password');
    }

    return;
  }

  public async activated(activatedDto: ActivatedDto): Promise<boolean> {
    const user = await this.userRepository.findByEmail(activatedDto.email);
    if (!user) {
      return true;
    }

    return user.passwordSet;
  }

  public async logout(): Promise<void> {
    return;
  }

  public async refresh(): Promise<TokenDto> {
    return;
  }
}
