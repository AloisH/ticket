import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
    console.log('PrismaService constructor');
  }

  async onModuleInit() {
    await this.$connect();
    Logger.log('Database connected!', 'Prisma');
  }
}
