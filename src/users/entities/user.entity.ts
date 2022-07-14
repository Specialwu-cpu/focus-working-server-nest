import { type } from 'os';
import { AttendanceEntity } from 'src/attendance/entities/attendance.entity';
import { AllLocalEntity } from 'src/fpconnect/entities/all-local.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToOne(type=>AllLocalEntity,AllLocalEntity=>AllLocalEntity.user)
  location:AllLocalEntity;
}
