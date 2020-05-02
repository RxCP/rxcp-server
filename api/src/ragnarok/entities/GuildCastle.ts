import { Column, Entity, Index } from 'typeorm';

@Index('guild_id', ['guildId'], {})
@Entity('guild_castle', { schema: 'ragnarok' })
export class GuildCastle {
  @Column('int', {
    primary: true,
    name: 'castle_id',
    unsigned: true,
    default: () => "'0'",
  })
  castleId: number;

  @Column('int', { name: 'guild_id', unsigned: true, default: () => "'0'" })
  guildId: number;

  @Column('int', { name: 'economy', unsigned: true, default: () => "'0'" })
  economy: number;

  @Column('int', { name: 'defense', unsigned: true, default: () => "'0'" })
  defense: number;

  @Column('int', { name: 'triggerE', unsigned: true, default: () => "'0'" })
  triggerE: number;

  @Column('int', { name: 'triggerD', unsigned: true, default: () => "'0'" })
  triggerD: number;

  @Column('int', { name: 'nextTime', unsigned: true, default: () => "'0'" })
  nextTime: number;

  @Column('int', { name: 'payTime', unsigned: true, default: () => "'0'" })
  payTime: number;

  @Column('int', { name: 'createTime', unsigned: true, default: () => "'0'" })
  createTime: number;

  @Column('int', { name: 'visibleC', unsigned: true, default: () => "'0'" })
  visibleC: number;

  @Column('int', { name: 'visibleG0', unsigned: true, default: () => "'0'" })
  visibleG0: number;

  @Column('int', { name: 'visibleG1', unsigned: true, default: () => "'0'" })
  visibleG1: number;

  @Column('int', { name: 'visibleG2', unsigned: true, default: () => "'0'" })
  visibleG2: number;

  @Column('int', { name: 'visibleG3', unsigned: true, default: () => "'0'" })
  visibleG3: number;

  @Column('int', { name: 'visibleG4', unsigned: true, default: () => "'0'" })
  visibleG4: number;

  @Column('int', { name: 'visibleG5', unsigned: true, default: () => "'0'" })
  visibleG5: number;

  @Column('int', { name: 'visibleG6', unsigned: true, default: () => "'0'" })
  visibleG6: number;

  @Column('int', { name: 'visibleG7', unsigned: true, default: () => "'0'" })
  visibleG7: number;
}
