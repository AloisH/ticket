import { CreateTicketDto } from './dto/create-ticket.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService {
  constructor() {
    return;
  }

  public async createDto(userId: number, createTicketDto: CreateTicketDto) {
    return;
  }
}
