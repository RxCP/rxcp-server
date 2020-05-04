import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mail', { schema: 'ragnarok' })
export class Mail {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'send_name', length: 30, default: () => "''" })
  sendName: string;

  @Column('int', { name: 'send_id', unsigned: true, default: () => "'0'" })
  sendId: number;

  @Column('varchar', { name: 'dest_name', length: 30, default: () => "''" })
  destName: string;

  @Column('int', { name: 'dest_id', unsigned: true, default: () => "'0'" })
  destId: number;

  @Column('varchar', { name: 'title', length: 45, default: () => "''" })
  title: string;

  @Column('varchar', { name: 'message', length: 500, default: () => "''" })
  message: string;

  @Column('int', { name: 'time', unsigned: true, default: () => "'0'" })
  time: number;

  @Column('tinyint', { name: 'status', default: () => "'0'" })
  status: number;

  @Column('int', { name: 'zeny', unsigned: true, default: () => "'0'" })
  zeny: number;

  @Column('smallint', { name: 'type', default: () => "'0'" })
  type: number;
}
