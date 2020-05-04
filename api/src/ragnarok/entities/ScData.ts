import { Column, Entity } from 'typeorm';

@Entity('sc_data', { schema: 'ragnarok' })
export class ScData {
  @Column('int', { name: 'account_id', unsigned: true })
  accountId: number;

  @Column('int', { primary: true, name: 'char_id', unsigned: true })
  charId: number;

  @Column('smallint', { primary: true, name: 'type', unsigned: true })
  type: number;

  @Column('bigint', { name: 'tick' })
  tick: string;

  @Column('int', { name: 'val1', default: () => "'0'" })
  val1: number;

  @Column('int', { name: 'val2', default: () => "'0'" })
  val2: number;

  @Column('int', { name: 'val3', default: () => "'0'" })
  val3: number;

  @Column('int', { name: 'val4', default: () => "'0'" })
  val4: number;
}
