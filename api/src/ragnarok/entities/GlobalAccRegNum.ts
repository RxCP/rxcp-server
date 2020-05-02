import { Column, Entity, Index } from 'typeorm';

@Index('account_id', ['accountId'], {})
@Entity('global_acc_reg_num', { schema: 'ragnarok' })
export class GlobalAccRegNum {
  @Column('int', {
    primary: true,
    name: 'account_id',
    unsigned: true,
    default: () => "'0'",
  })
  accountId: number;

  @Column('varchar', {
    primary: true,
    name: 'key',
    length: 32,
    default: () => "''",
  })
  key: string;

  @Column('int', {
    primary: true,
    name: 'index',
    unsigned: true,
    default: () => "'0'",
  })
  index: number;

  @Column('bigint', { name: 'value', default: () => "'0'" })
  value: string;
}
