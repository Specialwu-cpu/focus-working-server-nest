import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AttendanceEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @ManyToOne(type=>User,User=>User.attendTable)
  user:string;

  @Column()
  IsAskLeave:boolean;

  @Column()
  IsGoOut:boolean;

  @Column()
  date:Date;

}
