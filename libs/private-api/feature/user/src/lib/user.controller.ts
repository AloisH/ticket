import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserId } from '@ticket/private-api/core/auth';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    return;
  }

  @Get('me')
  public async findMe(@UserId() userId: number): Promise<UserDto> {
    return this.userService.findMe(userId);
  }

  @Post('me')
  public async updateMe(@UserId() userId: number, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return this.userService.updateMe(userId, updateUserDto);
  }
}
