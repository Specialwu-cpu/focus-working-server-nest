import { Body, Controller, Get, Post } from '@nestjs/common';
import { FpconnectService } from './fpconnect.service';

@Controller('fpconnect')
export class FpconnectController {
  constructor(private readonly fpservice: FpconnectService) { }

  @Post()
  fin(@Body() body) {
    return this.fpservice.createdb(body);
  }
  @Post('getall-local')
  getLocal(@Body() body) {
    return this.fpservice.getAllLocation();
  }
  @Post('getalocal')
  getALocal(@Body() body) {
    return this.fpservice.getalocation(body)
  }
  @Get()
  thri() {
    return '1145141919810\n逸一时误一世，逸久逸久罢已凌'
  }
}
