import { Column, Entity } from 'typeorm';

@Entity('quest', { schema: 'ragnarok' })
export class Quest {
  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column('int', { primary: true, name: 'quest_id', unsigned: true })
  questId: number;

  @Column('enum', {
    name: 'state',
    enum: ['0', '1', '2'],
    default: () => "'0'",
  })
  state: '0' | '1' | '2';

  @Column('int', { name: 'time', unsigned: true, default: () => "'0'" })
  time: number;

  @Column('mediumint', { name: 'count1', unsigned: true, default: () => "'0'" })
  count1: number;

  @Column('mediumint', { name: 'count2', unsigned: true, default: () => "'0'" })
  count2: number;

  @Column('mediumint', { name: 'count3', unsigned: true, default: () => "'0'" })
  count3: number;
}
