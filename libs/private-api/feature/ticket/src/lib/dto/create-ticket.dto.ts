import { IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  status: string;

  @IsString()
  content: string;

  @IsNumber()
  categoryId: number;
}
