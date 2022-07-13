import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';

@Module({
  imports: [UsersModule],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}

