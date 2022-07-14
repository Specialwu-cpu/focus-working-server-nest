import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AttendanceEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @ManyToOne(type=>User,User=>User.attendTable)
  @JoinColumn()
  user:User;

  @Column()
  IsAskLeave:boolean;

  @Column()
  IsGoOut:boolean;

  @Column()
  date:Date;

}
