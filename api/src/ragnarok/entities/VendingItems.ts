import { Column, Entity } from 'typeorm';

@Entity('vending_items', { schema: 'ragnarok' })
export class VendingItems {
  @Column('int', { primary: true, name: 'vending_id', unsigned: true })
  vendingId: number;

  @Column('smallint', { primary: true, name: 'index', unsigned: true })
  index: number;

  @Column('int', { name: 'cartinventory_id', unsigned: true })
  cartinventoryId: number;

  @Column('smallint', { name: 'amount', unsigned: true })
  amount: number;

  @Column('int', { name: 'price', unsigned: true })
  price: number;
}
