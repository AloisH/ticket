import { CreateUserModel } from './model/create-user.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ticket/private-api/core/prisma';
import { UpdateUserModel } from './model/update-user.model';
import { UserModel } from './model/user.model';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<UserModel> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async findById(id: number): Promise<UserModel> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(createUserModel: CreateUserModel) {
    return this.prisma.user.create({
      data: createUserModel,
    });
  }

  public async update(id: number, updateUserModel: UpdateUserModel) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserModel,
    });
  }
}
