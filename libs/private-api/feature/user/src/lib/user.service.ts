import { BadRequestException, Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from '@ticket/private-api/core/repository/user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {
    return;
  }

  public async findMe(userId: number): Promise<UserDto> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  public async updateMe(userId: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const updatedUser = await this.userRepository.update(userId, updateUserDto);
    return updatedUser;
  }
}
