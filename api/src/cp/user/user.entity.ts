import {
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashPassword } from '../../common/helpers/hash';

@Entity('rxcp_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    this.password = await hashPassword(password || this.password);
  }
}
