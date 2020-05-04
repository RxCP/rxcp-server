import { Column, Entity } from 'typeorm';

@Entity('sales', { schema: 'ragnarok' })
export class Sales {
  @Column('smallint', { primary: true, name: 'nameid', unsigned: true })
  nameid: number;

  @Column('datetime', { name: 'start' })
  start: Date;

  @Column('datetime', { name: 'end' })
  end: Date;

  @Column('int', { name: 'amount' })
  amount: number;
}
