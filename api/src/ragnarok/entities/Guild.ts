import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('guild_id', ['guildId'], { unique: true })
@Index('char_id', ['charId'], {})
@Entity('guild', { schema: 'ragnarok' })
export class Guild {
  @PrimaryGeneratedColumn({ type: 'int', name: 'guild_id', unsigned: true })
  guildId: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;

  @Column('int', {
    primary: true,
    name: 'char_id',
    unsigned: true,
    default: () => "'0'",
  })
  charId: number;

  @Column('varchar', { name: 'master', length: 24, default: () => "''" })
  master: string;

  @Column('tinyint', { name: 'guild_lv', unsigned: true, default: () => "'0'" })
  guildLv: number;

  @Column('tinyint', {
    name: 'connect_member',
    unsigned: true,
    default: () => "'0'",
  })
  connectMember: number;

  @Column('tinyint', {
    name: 'max_member',
    unsigned: true,
    default: () => "'0'",
  })
  maxMember: number;

  @Column('smallint', {
    name: 'average_lv',
    unsigned: true,
    default: () => "'1'",
  })
  averageLv: number;

  @Column('bigint', { name: 'exp', unsigned: true, default: () => "'0'" })
  exp: string;

  @Column('int', { name: 'next_exp', unsigned: true, default: () => "'0'" })
  nextExp: number;

  @Column('tinyint', {
    name: 'skill_point',
    unsigned: true,
    default: () => "'0'",
  })
  skillPoint: number;

  @Column('varchar', { name: 'mes1', length: 60, default: () => "''" })
  mes1: string;

  @Column('varchar', { name: 'mes2', length: 120, default: () => "''" })
  mes2: string;

  @Column('int', { name: 'emblem_len', unsigned: true, default: () => "'0'" })
  emblemLen: number;

  @Column('int', { name: 'emblem_id', unsigned: true, default: () => "'0'" })
  emblemId: number;

  @Column('blob', { name: 'emblem_data', nullable: true })
  emblemData: Buffer | null;

  @Column('datetime', { name: 'last_master_change', nullable: true })
  lastMasterChange: Date | null;
}
