import { IsDate, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class GetChatDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  friendName: string;

  // @ApiProperty()
  // @IsString()
  // message: string;

  // @ApiProperty()
  // @IsDate()
  // send_time: Date;

}
