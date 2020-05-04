import { Column, Entity, Index } from 'typeorm';

@Index('char_id', ['charId'], {})
@Entity('guild_member', { schema: 'ragnarok' })
export class GuildMember {
  @Column('int', {
    primary: true,
    name: 'guild_id',
    unsigned: true,
    default: () => "'0'",
  })
  guildId: number;

  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column('bigint', { name: 'exp', unsigned: true, default: () => "'0'" })
  exp: string;

  @Column('tinyint', { name: 'position', unsigned: true, default: () => "'0'" })
  position: number;
}
