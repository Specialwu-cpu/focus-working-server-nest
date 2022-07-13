import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceEntity } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(AttendanceEntity)
    private userRepository: Repository<AttendanceEntity>,
  ) {}
  async signIn(@Request() req) {
    var date = require("silly-datetime");
    var today = date.format(new Date(),'YYYY-MM-DD');  
    const anattend = this.userRepository.create({
      user:req.user.id,
      IsGoOut:false,
      IsAskLeave:false,
      date: today
    });
    return this.userRepository.save(anattend);
  }
}
