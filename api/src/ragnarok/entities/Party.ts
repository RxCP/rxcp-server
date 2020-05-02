import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('party', { schema: 'ragnarok' })
export class Party {
  @PrimaryGeneratedColumn({ type: 'int', name: 'party_id', unsigned: true })
  partyId: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;

  @Column('tinyint', { name: 'exp', unsigned: true, default: () => "'0'" })
  exp: number;

  @Column('tinyint', { name: 'item', unsigned: true, default: () => "'0'" })
  item: number;

  @Column('int', { name: 'leader_id', unsigned: true, default: () => "'0'" })
  leaderId: number;

  @Column('int', { name: 'leader_char', unsigned: true, default: () => "'0'" })
  leaderChar: number;
}
