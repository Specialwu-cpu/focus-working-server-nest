import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  friendName: string;

  @Column()
  message: string;

  @CreateDateColumn()
  send_time: Date;
}
