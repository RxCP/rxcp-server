import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('elemental', { schema: 'ragnarok' })
export class Elemental {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ele_id', unsigned: true })
  eleId: number;

  @Column('int', { name: 'char_id' })
  charId: number;

  @Column('mediumint', { name: 'class', unsigned: true, default: () => "'0'" })
  class: number;

  @Column('int', { name: 'mode', unsigned: true, default: () => "'1'" })
  mode: number;

  @Column('int', { name: 'hp', unsigned: true, default: () => "'0'" })
  hp: number;

  @Column('int', { name: 'sp', unsigned: true, default: () => "'0'" })
  sp: number;

  @Column('int', { name: 'max_hp', unsigned: true, default: () => "'0'" })
  maxHp: number;

  @Column('int', { name: 'max_sp', unsigned: true, default: () => "'0'" })
  maxSp: number;

  @Column('mediumint', { name: 'atk1', unsigned: true, default: () => "'0'" })
  atk1: number;

  @Column('mediumint', { name: 'atk2', unsigned: true, default: () => "'0'" })
  atk2: number;

  @Column('mediumint', { name: 'matk', unsigned: true, default: () => "'0'" })
  matk: number;

  @Column('smallint', { name: 'aspd', unsigned: true, default: () => "'0'" })
  aspd: number;

  @Column('smallint', { name: 'def', unsigned: true, default: () => "'0'" })
  def: number;

  @Column('smallint', { name: 'mdef', unsigned: true, default: () => "'0'" })
  mdef: number;

  @Column('smallint', { name: 'flee', unsigned: true, default: () => "'0'" })
  flee: number;

  @Column('smallint', { name: 'hit', unsigned: true, default: () => "'0'" })
  hit: number;

  @Column('bigint', { name: 'life_time', default: () => "'0'" })
  lifeTime: string;
}
