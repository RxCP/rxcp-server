import { Column, Entity } from 'typeorm';

@Entity('guild_position', { schema: 'ragnarok' })
export class GuildPosition {
  @Column('int', {
    primary: true,
    name: 'guild_id',
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column('tinyint', {
    primary: true,
    name: 'position',
    unsigned: true,
    default: () => "'0'",
  })
  position: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;

  @Column('smallint', { name: 'mode', unsigned: true, default: () => "'0'" })
  mode: number;

  @Column('tinyint', { name: 'exp_mode', unsigned: true, default: () => "'0'" })
  expMode: number;
}
