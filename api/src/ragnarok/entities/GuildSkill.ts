import { Column, Entity } from 'typeorm';

@Entity('guild_skill', { schema: 'ragnarok' })
export class GuildSkill {
  @Column('int', {
    primary: true,
    name: 'guild_id',
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column('smallint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column('tinyint', { name: 'lv', unsigned: true, default: () => "'0'" })
  lv: number;
}
