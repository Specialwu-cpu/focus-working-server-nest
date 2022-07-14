import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService:AttendanceService){}
  @UseGuards(JwtAuthGuard)
  @Get('sighin')
  async info(@Request() req) {
    return this.attendanceService.signIn(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('kq')
  async kqfun(@Request() req){
    return this.attendanceService.kqfun(req);
  }
}
