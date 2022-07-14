import { type } from 'os';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AllLocalEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @OneToOne(type=>User,User=>User.location)
  @JoinColumn()
  user:User;

  @Column({type:'float'})
  x:number;

  @Column({type:'float'})
  y:number;

  @Column()
  date:Date;
}
