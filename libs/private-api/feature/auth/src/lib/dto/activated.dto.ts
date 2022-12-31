import { IsEmail, IsString } from 'class-validator';

export class ActivatedDto {
  @IsString()
  @IsEmail()
  email: string;
}
