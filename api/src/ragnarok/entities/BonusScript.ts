import { Column, Entity } from 'typeorm';

@Entity('bonus_script', { schema: 'ragnarok' })
export class BonusScript {
  @Column('int', { primary: true, name: 'char_id', unsigned: true })
  charId: number;

  @Column('text', { name: 'script' })
  script: string;

  @Column('bigint', { name: 'tick', default: () => "'0'" })
  tick: string;

  @Column('smallint', { name: 'flag', unsigned: true, default: () => "'0'" })
  flag: number;

  @Column('tinyint', {
    primary: true,
    name: 'type',
    unsigned: true,
    default: () => "'0'",
  })
  type: number;

  @Column('smallint', { name: 'icon', default: () => "'-1'" })
  icon: number;
}
