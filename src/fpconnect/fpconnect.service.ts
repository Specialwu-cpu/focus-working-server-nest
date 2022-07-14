import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { getConnection, Repository } from 'typeorm';
import { CreateLocalDto, GetLocalDto } from './dto/fpconnect.dto';
import { AllLocalEntity } from './entities/all-local.entity';
import { Locations } from './entities/location.entities';

@Injectable()
export class FpconnectService {
  constructor(
    @InjectRepository(Locations)
    private readonly ldbRepository: Repository<Locations>,

    @InjectRepository(AllLocalEntity)
    private readonly readdress: Repository<AllLocalEntity>,

    private readonly userservice: UsersService,
  ) {}

  createdb(body: CreateLocalDto) {
    const ldb = this.ldbRepository.create({
      fp1: body.fp1,
      fp2: body.fp2,
      fp3: body.fp3,
      fp4: body.fp4,
      x: body.x,
      y: body.y,
    });
    return this.ldbRepository.save(ldb);
  }

  async getothers(body: any) {
    const anuser = await this.userservice.findOne(body.queryPerson);
    const goodthing = await this.readdress.findOne({
      where: { id: anuser.id },
    });
    if (!goodthing) {
      return { message: '该人不在定位' };
    } else {
      return { x: goodthing.x, y: goodthing.y };
    }
  }

  async getalocation(body: GetLocalDto, req: any) {
    const lis1 = await this.ldbRepository.find();
    var alist = [];
    for (var i = 0; i < lis1.length; i++) {
      alist.push({
        key: lis1[i].id,
        value:
          (lis1[i].fp1 - body.fp1) ** 2 +
          (lis1[i].fp2 - body.fp2) ** 2 +
          (lis1[i].fp3 - body.fp3) ** 2 +
          (lis1[i].fp4 - body.fp4) ** 2,
      });
    }
    var anumber = alist[0].value;
    for (var i = 0; i < lis1.length; i++) {
      if (alist[i].value < anumber) {
        anumber = alist[i].value;
      }
    }
    var numberList = [];
    for (var i = 0; i < lis1.length; i++) {
      if (alist[i].value < 1.25 * anumber) {
        const alocation = await this.ldbRepository.findOne({
          where: {
            id: alist[i].key,
          },
        });
        numberList.push(alocation);
      }
    }
    var finalx = 0;
    var finaly = 0;
    for (var i = 0; i < numberList.length; i++) {
      finalx += numberList[i].x;
      finaly += numberList[i].y;
    }
    finalx = finalx / numberList.length;
    finaly = finaly / numberList.length;
    var finarry = [];
    finarry.push(finalx);
    finarry.push(finaly);
    var findict = { x: finalx, y: finaly };
    if (finalx > 3 && finaly > 3) {
      const sksksks = 0;
    } else {
      const firstone = await this.readdress.findOne({
        relations: { user: true },
        where: { user: req.user },
      });
      if (!firstone) {
        var date = require('silly-datetime');
        var today = date.format(new Date());
        const newfirst = this.readdress.create({
          user: req.user,
          x: finalx,
          y: finaly,
          date: today,
        });
        this.readdress.save(newfirst);
      } else {
        var date = require('silly-datetime');
        var today = date.format(new Date());
        const whichone = await this.readdress.findOne({
          relations: { user: true },
          where: { user: req.user },
        });
        let anumber = whichone.id;
        let lasttime = whichone.date;
        let nowt = new Date();
        var lasttime_s = lasttime.getTime();
        lasttime.setTime(lasttime_s + 1000 * 60 * 10);
        const updatelocal = await this.readdress.preload({
          id: anumber,
          x: finalx,
          y: finaly,
          date: today,
        });
        this.readdress.save(updatelocal);
        if (nowt > lasttime) {
          return {
            message: '拉屎超时啦！！',
          };
        }
      }
    }
    return findict;
  }

  async getAllLocation() {
    const lis1 = await this.ldbRepository.find();
    return lis1;
  }
}
