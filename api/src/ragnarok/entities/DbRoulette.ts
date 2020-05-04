import { Column, Entity } from 'typeorm';

@Entity('db_roulette', { schema: 'ragnarok' })
export class DbRoulette {
  @Column('int', { primary: true, name: 'index', default: () => "'0'" })
  index: number;

  @Column('smallint', { name: 'level', unsigned: true })
  level: number;

  @Column('smallint', { name: 'item_id', unsigned: true })
  itemId: number;

  @Column('smallint', { name: 'amount', unsigned: true, default: () => "'1'" })
  amount: number;

  @Column('smallint', { name: 'flag', unsigned: true, default: () => "'1'" })
  flag: number;
}
