import { CreateTicketModel } from './model/create-ticket.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ticket/private-api/core/prisma';
import { TicketModel } from './model/ticket.model';

@Injectable()
export class TicketRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createTicketModel: CreateTicketModel): Promise<TicketModel> {
    return this.prisma.ticket.create({
      data: createTicketModel,
    });
  }
}
