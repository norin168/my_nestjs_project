import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  firstName: string;

  @Column({ length: 15 })
  lastName: string;

  @Column({ length: 15 })
  username: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column({ length: 40 })
  email: string;

  @Column({ type: 'enum', enum: ['Admin', 'User'] })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
