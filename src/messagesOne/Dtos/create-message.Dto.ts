import { IsString } from 'class-validator';

//validation for post message
export class createMessageDto {
  @IsString()
  content: string;
}
