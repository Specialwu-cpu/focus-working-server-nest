import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateLocalDto, GetLocalDto } from './dto/fpconnect.dto';
import { FpconnectService } from './fpconnect.service';

@Controller('fpconnect')
export class FpconnectController {
  constructor(private readonly fpservice: FpconnectService) { }

  @Post()
  fin(@Body() createlocalDto: CreateLocalDto) {
    return this.fpservice.createdb(createlocalDto);
  }
  @Post('getall-local')
  getLocal(@Body() body) {
    return this.fpservice.getAllLocation();
  }

  @UseGuards(JwtAuthGuard)
  @Post('getalocal')
  getALocal(@Body() getlocaldto: GetLocalDto,@Request() req) {
    return this.fpservice.getalocation(getlocaldto,req)
  }
  @Get()
  thri() {
    return '1145141919810\n逸一时误一世，逸久逸久罢已凌'
  }
}
