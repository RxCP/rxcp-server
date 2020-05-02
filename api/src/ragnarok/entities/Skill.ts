import { Column, Entity } from 'typeorm';

@Entity('skill', { schema: 'ragnarok' })
export class Skill {
  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column('smallint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('tinyint', { name: 'lv', unsigned: true, default: () => "'0'" })
  lv: number;

  @Column('tinyint', { name: 'flag', unsigned: true, default: () => "'0'" })
  flag: number;
}
