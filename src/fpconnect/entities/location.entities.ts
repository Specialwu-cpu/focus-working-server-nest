import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Locations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fp1: number;

  @Column()
  fp2: number;

  @Column()
  fp3: number;

  @Column()
  fp4: number;

  @Column()
  x: number;

  @Column()
  y: number;
}
