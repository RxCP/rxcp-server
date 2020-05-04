import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mercenary', { schema: 'ragnarok' })
export class Mercenary {
  @PrimaryGeneratedColumn({ type: 'int', name: 'mer_id', unsigned: true })
  merId: number;

  @Column('int', { name: 'char_id' })
  charId: number;

  @Column('mediumint', { name: 'class', unsigned: true, default: () => "'0'" })
  class: number;

  @Column('int', { name: 'hp', unsigned: true, default: () => "'0'" })
  hp: number;

  @Column('int', { name: 'sp', unsigned: true, default: () => "'0'" })
  sp: number;

  @Column('int', { name: 'kill_counter' })
  killCounter: number;

  @Column('bigint', { name: 'life_time', default: () => "'0'" })
  lifeTime: string;
}
