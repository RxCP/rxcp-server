import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clan', { schema: 'ragnarok' })
export class Clan {
  @PrimaryGeneratedColumn({ type: 'int', name: 'clan_id', unsigned: true })
  clanId: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;

  @Column('varchar', { name: 'master', length: 24, default: () => "''" })
  master: string;

  @Column('varchar', { name: 'mapname', length: 24, default: () => "''" })
  mapname: string;

  @Column('smallint', {
    name: 'max_member',
    unsigned: true,
    default: () => "'0'",
  })
  maxMember: number;
}
