import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var date = require("silly-datetime");
    var today = date.format(new Date(),'YYYY-MM-DD');  
    return today;
  }
}
