import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('account_id', ['accountId'], {})
@Entity('charlog', { schema: 'ragnarok' })
export class Charlog {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('datetime', { name: 'time' })
  time: Date;

  @Column('varchar', {
    name: 'char_msg',
    length: 255,
    default: () => "'char select'",
  })
  charMsg: string;

  @Column('int', { name: 'account_id', default: () => "'0'" })
  accountId: number;

  @Column('tinyint', { name: 'char_num', default: () => "'0'" })
  charNum: number;

  @Column('varchar', { name: 'name', length: 23, default: () => "''" })
  name: string;

  @Column('int', { name: 'str', unsigned: true, default: () => "'0'" })
  str: number;

  @Column('int', { name: 'agi', unsigned: true, default: () => "'0'" })
  agi: number;

  @Column('int', { name: 'vit', unsigned: true, default: () => "'0'" })
  vit: number;

  @Column('int', { name: 'int', unsigned: true, default: () => "'0'" })
  int: number;

  @Column('int', { name: 'dex', unsigned: true, default: () => "'0'" })
  dex: number;

  @Column('int', { name: 'luk', unsigned: true, default: () => "'0'" })
  luk: number;

  @Column('tinyint', { name: 'hair', default: () => "'0'" })
  hair: number;

  @Column('int', { name: 'hair_color', default: () => "'0'" })
  hairColor: number;
}
