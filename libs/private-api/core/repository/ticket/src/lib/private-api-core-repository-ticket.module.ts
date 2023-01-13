import { Module } from '@nestjs/common';
import { PrivateApiCorePrismaModule } from '@ticket/private-api/core/prisma';
import { TicketRepository } from './ticket.repository';

@Module({
  imports: [PrivateApiCorePrismaModule],
  providers: [TicketRepository],
  exports: [TicketRepository],
})
export class PrivateApiCoreRepositoryTicketModule {}
