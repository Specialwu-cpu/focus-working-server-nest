import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AttendanceEntity } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(AttendanceEntity)
    private userRepository: Repository<AttendanceEntity>,

    private readonly userService: UsersService
  ) {}

  async kqfun(@Request() req){
    const records = await this.userRepository.find({where:{user:req.user.id}});
    const thename = await (await this.userService.findoneFromid(req.user.id)).username;
    const timeTable = [];
    for(var i=0;i<records.length;i++){
      const findate = records[i].date.toLocaleDateString();
      timeTable.push(findate);
    }
    return{"name":thename,"date":timeTable};
  }

  async signIn(@Request() req) {
    var date = require('silly-datetime');
    var today = date.format(new Date(), 'YYYY-MM-DD');
    const signRecord = await this.userRepository.findOne({
      where: {
        date: today,
        user: req.user.id,
      },
    });
    if (!signRecord) {
      const anattend = this.userRepository.create({
        user: req.user.id,
        IsGoOut: false,
        IsAskLeave: false,
        date: today,
      });
      const myname = this.userRepository.save(anattend);
      return {
        message: 'success',
      };
    } else {
      return {
        message: 'repeated',
      };
    }
  }
}
