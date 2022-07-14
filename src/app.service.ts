import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    var date = require("silly-datetime");
    var today1 = date.format(new Date(Date.now()));
    var today = date.format(new Date(Date.now()-1000*24*60*60));
    const s = today1-today;
    return '1234567';
  }
}
