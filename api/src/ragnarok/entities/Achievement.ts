import { Column, Entity, Index } from 'typeorm';

@Index('char_id', ['charId'], {})
@Entity('achievement', { schema: 'ragnarok' })
export class Achievement {
  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column('bigint', { primary: true, name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'count1', unsigned: true, default: () => "'0'" })
  count1: number;

  @Column('int', { name: 'count2', unsigned: true, default: () => "'0'" })
  count2: number;

  @Column('int', { name: 'count3', unsigned: true, default: () => "'0'" })
  count3: number;

  @Column('int', { name: 'count4', unsigned: true, default: () => "'0'" })
  count4: number;

  @Column('int', { name: 'count5', unsigned: true, default: () => "'0'" })
  count5: number;

  @Column('int', { name: 'count6', unsigned: true, default: () => "'0'" })
  count6: number;

  @Column('int', { name: 'count7', unsigned: true, default: () => "'0'" })
  count7: number;

  @Column('int', { name: 'count8', unsigned: true, default: () => "'0'" })
  count8: number;

  @Column('int', { name: 'count9', unsigned: true, default: () => "'0'" })
  count9: number;

  @Column('int', { name: 'count10', unsigned: true, default: () => "'0'" })
  count10: number;

  @Column('datetime', { name: 'completed', nullable: true })
  completed: Date | null;

  @Column('datetime', { name: 'rewarded', nullable: true })
  rewarded: Date | null;
}
