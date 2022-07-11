import { Body, Controller, Get, Post } from '@nestjs/common';
import { FpconnectService } from './fpconnect.service';

@Controller('fpconnect')
export class FpconnectController {
    constructor(private readonly fpservice: FpconnectService){}

    @Post()
    fin(@Body() body){
      return this.fpservice.createdb(body);
    }
    @Post('getAllLocal')
    getLocal(@Body() body){
      return this.fpservice.getAllLocation();
    }
    @Post('getALocal')
    getALocal(@Body() body){
      return this.fpservice.getalocation(body)
    }
}
