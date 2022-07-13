import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sender_name: string;

  @Column()
  receiver_name: string;

  @Column()
  message: string;

  @Column()
  send_time: Date;
}
