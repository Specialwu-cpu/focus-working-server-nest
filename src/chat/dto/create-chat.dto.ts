import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreateChatDto {
  @ApiProperty()
  @IsString()
  sender_name: string;

  @ApiProperty()
  @IsString()
  receiver_name: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsDate()
  time: Date;
}
