import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bikes')
export class Bike {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  model: string;

  @Column()
  cost: number;

  @Column()
  availability: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
