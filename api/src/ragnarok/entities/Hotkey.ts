import { Column, Entity } from 'typeorm';

@Entity('hotkey', { schema: 'ragnarok' })
export class Hotkey {
  @Column('int', { primary: true, name: 'char_id' })
  charId: number;

  @Column('tinyint', { primary: true, name: 'hotkey', unsigned: true })
  hotkey: number;

  @Column('tinyint', { name: 'type', unsigned: true, default: () => "'0'" })
  type: number;

  @Column('int', { name: 'itemskill_id', unsigned: true, default: () => "'0'" })
  itemskillId: number;

  @Column('tinyint', {
    name: 'skill_lvl',
    unsigned: true,
    default: () => "'0'",
  })
  skillLvl: number;
}
