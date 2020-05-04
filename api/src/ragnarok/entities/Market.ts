import { Column, Entity } from 'typeorm';

@Entity('market', { schema: 'ragnarok' })
export class Market {
  @Column('varchar', {
    primary: true,
    name: 'name',
    length: 50,
    default: () => "''",
  })
  name: string;

  @Column('smallint', { primary: true, name: 'nameid', unsigned: true })
  nameid: number;

  @Column('int', { name: 'price', unsigned: true })
  price: number;

  @Column('smallint', { name: 'amount', unsigned: true })
  amount: number;

  @Column('tinyint', { name: 'flag', unsigned: true, default: () => "'0'" })
  flag: number;
}
