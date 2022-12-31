import { CreateUserModel } from './model/create-user.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ticket/private-api/core/prisma';
import { UserModel } from './model/user.model';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {
    console.log('UserRepository constructor');
  }

  public async findByEmail(email: string): Promise<UserModel> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async create(createUserModel: CreateUserModel) {
    return this.prisma.user.create({
      data: createUserModel,
    });
  }
}
