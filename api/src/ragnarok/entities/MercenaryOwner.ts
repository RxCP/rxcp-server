import { Column, Entity } from 'typeorm';

@Entity('mercenary_owner', { schema: 'ragnarok' })
export class MercenaryOwner {
  @Column('int', { primary: true, name: 'char_id' })
  charId: number;

  @Column('int', { name: 'merc_id', default: () => "'0'" })
  mercId: number;

  @Column('int', { name: 'arch_calls', default: () => "'0'" })
  archCalls: number;

  @Column('int', { name: 'arch_faith', default: () => "'0'" })
  archFaith: number;

  @Column('int', { name: 'spear_calls', default: () => "'0'" })
  spearCalls: number;

  @Column('int', { name: 'spear_faith', default: () => "'0'" })
  spearFaith: number;

  @Column('int', { name: 'sword_calls', default: () => "'0'" })
  swordCalls: number;

  @Column('int', { name: 'sword_faith', default: () => "'0'" })
  swordFaith: number;
}
