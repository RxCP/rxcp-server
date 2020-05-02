import { Column, Entity } from 'typeorm';

@Entity('buyingstore_items', { schema: 'ragnarok' })
export class BuyingstoreItems {
  @Column('int', { primary: true, name: 'buyingstore_id', unsigned: true })
  buyingstoreId: number;

  @Column('smallint', { primary: true, name: 'index', unsigned: true })
  index: number;

  @Column('int', { name: 'item_id', unsigned: true })
  itemId: number;

  @Column('smallint', { name: 'amount', unsigned: true })
  amount: number;

  @Column('int', { name: 'price', unsigned: true })
  price: number;
}
