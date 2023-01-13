import { Body, Controller, Post } from '@nestjs/common';

import { UserId } from '@ticket/private-api/core/auth';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  public async create(@UserId() userId: number, @Body() createTicketDto: CreateTicketDto) {
    return;
  }
}
