import { Column, Entity, Index } from 'typeorm';

@Index('alliance_id', ['allianceId'], {})
@Entity('clan_alliance', { schema: 'ragnarok' })
export class ClanAlliance {
  @Column('int', {
    primary: true,
    name: 'clan_id',
    unsigned: true,
    default: () => "'0'",
  })
  clanId: number;

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
