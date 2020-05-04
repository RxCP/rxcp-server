import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cp_users', { schema: 'ragnarok' })
export class CpUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username', length: 255 })
  username: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'firstName', length: 255 })
  firstName: string;

  @Column('varchar', { name: 'lastName', length: 255 })
  lastName: string;

  @Column('timestamp', {
    name: 'createdAt',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updatedAt',
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;
}
