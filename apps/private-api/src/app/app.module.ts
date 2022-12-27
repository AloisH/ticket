import { Module } from '@nestjs/common';
import { PrivateApiCorePrismaModule } from '@ticket/private-api/core/prisma';

@Module({
  imports: [PrivateApiCorePrismaModule],
})
export class AppModule {}
