import { Column, Entity } from 'typeorm';

@Entity('guild_expulsion', { schema: 'ragnarok' })
export class GuildExpulsion {
  @Column('int', {
    primary: true,
    name: 'guild_id',
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column('int', { name: 'account_id', unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column('varchar', {
    primary: true,
    name: 'name',
    length: 24,
    default: () => "''",
  })
  name: string;

  @Column('varchar', { name: 'mes', length: 40, default: () => "''" })
  mes: string;
}
