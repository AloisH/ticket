import { CreateTicketDto } from './dto/create-ticket.dto';
import { Injectable } from '@nestjs/common';
import { TicketDto } from './dto/ticket.dto';
import { TicketRepository } from '@ticket/private-api/core/repository/ticket';

@Injectable()
export class TicketService {
  constructor(private readonly ticketRepository: TicketRepository) {
    return;
  }

  public async createDto(userId: number, createTicketDto: CreateTicketDto): Promise<TicketDto> {
    return this.ticketRepository.create({
      status: createTicketDto.status,
      categoryId: createTicketDto.categoryId,
      authorId: userId,
    });
  }
}
