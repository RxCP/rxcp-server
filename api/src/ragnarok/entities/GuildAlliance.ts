import { Column, Entity, Index } from 'typeorm';

@Index('alliance_id', ['allianceId'], {})
@Entity('guild_alliance', { schema: 'ragnarok' })
export class GuildAlliance {
  @Column('int', {
    primary: true,
    name: 'guild_id',
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column('int', { name: 'opposition', unsigned: true, default: () => "'0'" })
  opposition: number;

  @Column('int', {
    primary: true,
    name: 'alliance_id',
    unsigned: true,
    default: () => "'0'",
  })
  allianceId: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;
}
