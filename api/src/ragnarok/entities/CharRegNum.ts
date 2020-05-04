import { Column, Entity, Index } from 'typeorm';

@Index('char_id', ['charId'], {})
@Entity('char_reg_num', { schema: 'ragnarok' })
export class CharRegNum {
  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

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
