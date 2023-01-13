export interface TicketDto {
  id: number;
  status: string;
  authorId: number;
  categoryId: number;
}

export interface CreateTicketDto {
  status: string;
  content: string;
  categoryId: number;
}
