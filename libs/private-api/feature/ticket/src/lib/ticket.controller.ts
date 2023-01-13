import { TicketService } from './ticket.service';

export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
}
