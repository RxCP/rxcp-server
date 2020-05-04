import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('time', ['time'], {})
@Entity('interlog', { schema: 'ragnarok' })
export class Interlog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'time' })
  time: Date;

  @Column('varchar', { name: 'log', length: 255, default: () => "''" })
  log: string;
}
