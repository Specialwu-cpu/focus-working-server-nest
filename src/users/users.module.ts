import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AttendanceModule } from 'src/attendance/attendance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FpconnectModule } from 'src/fpconnect/fpconnect.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AttendanceModule,
    FpconnectModule
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
