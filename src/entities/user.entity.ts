import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Utility function to format the phone number
function formatPhone(phone: string): string {
  if (phone && phone.length === 9) {
    return `${phone.substring(0, 3)} ${phone.substring(3, 6)} ${phone.substring(6)}`;
  }
  return phone;
}

// Define the transformer
const phoneTransformer = {
  to: (value: string): string => value, // Store the value as-is
  from: (value: string): string => formatPhone(value), // Format when reading from the DB
};

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15, nullable: false })
  firstName: string;

  @Column({ length: 15, nullable: false })
  lastName: string;

  @Column({ length: 15, nullable: false })
  username: string;

  @Column({ length: 144, nullable: false })
  password: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true,
    transformer: phoneTransformer,
  })
  phone?: string;

  @Column({ length: 40, nullable: true })
  email?: string;

  @Column({ type: 'enum', enum: ['Admin', 'User'], default: 'User' })
  role: 'Admin' | 'User';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
