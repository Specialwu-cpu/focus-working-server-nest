import { IsNumber, IsString } from 'class-validator';

export class CreateLocalDto {
  @IsNumber()
  fp1: number;

  @IsNumber()
  fp2: number;

  @IsNumber()
  fp3: number;

  @IsNumber()
  fp4: number;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}

export class GetLocalDto {
    @IsNumber()
    fp1: number;
  
    @IsNumber()
    fp2: number;
  
    @IsNumber()
    fp3: number;
  
    @IsNumber()
    fp4: number;
}
