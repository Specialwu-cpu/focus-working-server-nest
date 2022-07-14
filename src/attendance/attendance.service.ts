import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { AttendanceEntity } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(AttendanceEntity)
    private userRepository: Repository<AttendanceEntity>,

    private readonly userService: UsersService,
  ) {}

  async kqfun(@Request() req) {
    const thman = await this.userService.findoneFromid(req.user.id);
    const records = await this.userRepository.find({
      relations: {user:true},
      where: { user:  thman  }
    });
    const thename = await (
      await this.userService.findoneFromid(req.user.id)
    ).username;
    const timeTable = [];
    if (!records) {
      return { msg: '没打过卡' };
    }
    for (var i = 0; i < records.length; i++) {
      const findate = records[i].date.toLocaleDateString();
      timeTable.push(findate);
    }
    var final = [];
    for (var i = 0; i < records.length; i++) {
      final.push({ name: thename, date: timeTable[i] });
    }
    return final;
  }

  async signIn(@Request() req) {
    var date = require('silly-datetime');
    var today = date.format(new Date(), 'YYYY-MM-DD');
    const signRecord = await this.userRepository.findOne({
      relations: {user:true},
      where: {
        date: today,
        user: req.user,
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
