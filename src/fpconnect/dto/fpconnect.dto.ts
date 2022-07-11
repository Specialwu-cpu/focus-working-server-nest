import { IsString } from 'class-validator';

export class CreateLocalDto {
  @IsString()
  fp1: number;

  @IsString()
  fp2: number;

  @IsString()
  fp3: number;

  @IsString()
  fp4: number;

  @IsString()
  x: number;

  @IsString()
  y: number;
}

export class GetLocalDto {
    @IsString()
    fp1: number;
  
    @IsString()
    fp2: number;
  
    @IsString()
    fp3: number;
  
    @IsString()
    fp4: number;
}