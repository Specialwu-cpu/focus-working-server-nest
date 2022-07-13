import { type } from 'os';
import { AttendanceEntity } from 'src/attendance/entities/attendance.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(type=>AttendanceEntity,AttendanceEntity=>AttendanceEntity.user)
  attendTable:AttendanceEntity[];
}
