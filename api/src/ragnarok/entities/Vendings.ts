import { Column, Entity } from 'typeorm';

@Entity('vendings', { schema: 'ragnarok' })
export class Vendings {
  @Column('int', { primary: true, name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'account_id', unsigned: true })
  accountId: number;

  @Column('int', { name: 'char_id', unsigned: true })
  charId: number;

  @Column('enum', { name: 'sex', enum: ['F', 'M'], default: () => "'M'" })
  sex: 'F' | 'M';

  @Column('varchar', { name: 'map', length: 20 })
  map: string;

  @Column('smallint', { name: 'x', unsigned: true })
  x: number;

  @Column('smallint', { name: 'y', unsigned: true })
  y: number;

  @Column('varchar', { name: 'title', length: 80 })
  title: string;

  @Column('char', { name: 'body_direction', length: 1, default: () => "'4'" })
  bodyDirection: string;

  @Column('char', { name: 'head_direction', length: 1, default: () => "'0'" })
  headDirection: string;

  @Column('char', { name: 'sit', length: 1, default: () => "'1'" })
  sit: string;

  @Column('tinyint', { name: 'autotrade' })
  autotrade: number;
}
