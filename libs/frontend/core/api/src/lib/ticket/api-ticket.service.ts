import { CreateTicketDto, TicketDto } from './api-ticket.dto';

import { ApiBaseService } from '../api-base.service';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiTicketService extends ApiBaseService {
  constructor(apiService: ApiService) {
    super(apiService);
    this.url = 'ticket';
  }

  public create(ticketDto: CreateTicketDto): Observable<TicketDto> {
    return this.apiService.post(this.url, ticketDto);
  }
}
