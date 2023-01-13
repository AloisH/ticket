import { Module } from '@nestjs/common';
import { PrivateApiCoreRepositoryTicketModule } from '@ticket/private-api/core/repository/ticket';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [PrivateApiCoreRepositoryTicketModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class PrivateApiFeatureTicketModule {}
