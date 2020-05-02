import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auction', { schema: 'ragnarok' })
export class Auction {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'auction_id',
    unsigned: true,
  })
  auctionId: string;

  @Column('int', { name: 'seller_id', unsigned: true, default: () => "'0'" })
  sellerId: number;

  @Column('varchar', { name: 'seller_name', length: 30, default: () => "''" })
  sellerName: string;

  @Column('int', { name: 'buyer_id', unsigned: true, default: () => "'0'" })
  buyerId: number;

  @Column('varchar', { name: 'buyer_name', length: 30, default: () => "''" })
  buyerName: string;

  @Column('int', { name: 'price', unsigned: true, default: () => "'0'" })
  price: number;

  @Column('int', { name: 'buynow', unsigned: true, default: () => "'0'" })
  buynow: number;

  @Column('smallint', { name: 'hours', default: () => "'0'" })
  hours: number;

  @Column('int', { name: 'timestamp', unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column('smallint', { name: 'nameid', unsigned: true, default: () => "'0'" })
  nameid: number;

  @Column('varchar', { name: 'item_name', length: 50, default: () => "''" })
  itemName: string;

  @Column('smallint', { name: 'type', default: () => "'0'" })
  type: number;

  @Column('tinyint', { name: 'refine', unsigned: true, default: () => "'0'" })
  refine: number;

  @Column('tinyint', {
    name: 'attribute',
    unsigned: true,
    default: () => "'0'",
  })
  attribute: number;

  @Column('smallint', { name: 'card0', unsigned: true, default: () => "'0'" })
  card0: number;

  @Column('smallint', { name: 'card1', unsigned: true, default: () => "'0'" })
  card1: number;

  @Column('smallint', { name: 'card2', unsigned: true, default: () => "'0'" })
  card2: number;

  @Column('smallint', { name: 'card3', unsigned: true, default: () => "'0'" })
  card3: number;

  @Column('smallint', { name: 'option_id0', default: () => "'0'" })
  optionId0: number;

  @Column('smallint', { name: 'option_val0', default: () => "'0'" })
  optionVal0: number;

  @Column('tinyint', { name: 'option_parm0', default: () => "'0'" })
  optionParm0: number;

  @Column('smallint', { name: 'option_id1', default: () => "'0'" })
  optionId1: number;

  @Column('smallint', { name: 'option_val1', default: () => "'0'" })
  optionVal1: number;

  @Column('tinyint', { name: 'option_parm1', default: () => "'0'" })
  optionParm1: number;

  @Column('smallint', { name: 'option_id2', default: () => "'0'" })
  optionId2: number;

  @Column('smallint', { name: 'option_val2', default: () => "'0'" })
  optionVal2: number;

  @Column('tinyint', { name: 'option_parm2', default: () => "'0'" })
  optionParm2: number;

  @Column('smallint', { name: 'option_id3', default: () => "'0'" })
  optionId3: number;

  @Column('smallint', { name: 'option_val3', default: () => "'0'" })
  optionVal3: number;

  @Column('tinyint', { name: 'option_parm3', default: () => "'0'" })
  optionParm3: number;

  @Column('smallint', { name: 'option_id4', default: () => "'0'" })
  optionId4: number;

  @Column('smallint', { name: 'option_val4', default: () => "'0'" })
  optionVal4: number;

  @Column('tinyint', { name: 'option_parm4', default: () => "'0'" })
  optionParm4: number;

  @Column('bigint', { name: 'unique_id', unsigned: true, default: () => "'0'" })
  uniqueId: string;
}
