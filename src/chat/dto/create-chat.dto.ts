import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateChatDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  friendName: string;

  @ApiProperty()
  @IsString()
  message: string;


}
