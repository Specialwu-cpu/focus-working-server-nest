import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLocalDto {
  @ApiProperty()
  @IsNumber()
  fp1: number;

  @ApiProperty()
  @IsNumber()
  fp2: number;

  @ApiProperty()
  @IsNumber()
  fp3: number;

  @ApiProperty()
  @IsNumber()
  fp4: number;

  @ApiProperty()
  @IsNumber()
  x: number;

  @ApiProperty()
  @IsNumber()
  y: number;
}

export class GetLocalDto {
    @ApiProperty()
    @IsNumber()
    fp1: number;
  
    @ApiProperty()
    @IsNumber()
    fp2: number;
  
    @ApiProperty()
    @IsNumber()
    fp3: number;
  
    @ApiProperty()
    @IsNumber()
    fp4: number;
}
