import { Column, Entity } from 'typeorm';

@Entity('skillcooldown', { schema: 'ragnarok' })
export class Skillcooldown {
  @Column('int', { name: 'account_id', unsigned: true })
  accountId: number;

  @Column('int', { primary: true, name: 'char_id', unsigned: true })
  charId: number;

  @Column('smallint', {
    primary: true,
    name: 'skill',
    unsigned: true,
    default: () => "'0'",
  })
  skill: number;

  @Column('bigint', { name: 'tick' })
  tick: string;
}
