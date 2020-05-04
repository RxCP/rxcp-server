import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet', { schema: 'ragnarok' })
export class Pet {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pet_id', unsigned: true })
  petId: number;

  @Column('mediumint', { name: 'class', unsigned: true, default: () => "'0'" })
  class: number;

  @Column('varchar', { name: 'name', length: 24, default: () => "''" })
  name: string;

  @Column('int', { name: 'account_id', unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column('int', { name: 'char_id', unsigned: true, default: () => "'0'" })
  charId: number;

  @Column('smallint', { name: 'level', unsigned: true, default: () => "'0'" })
  level: number;

  @Column('smallint', { name: 'egg_id', unsigned: true, default: () => "'0'" })
  eggId: number;

  @Column('mediumint', { name: 'equip', unsigned: true, default: () => "'0'" })
  equip: number;

  @Column('smallint', {
    name: 'intimate',
    unsigned: true,
    default: () => "'0'",
  })
  intimate: number;

  @Column('smallint', { name: 'hungry', unsigned: true, default: () => "'0'" })
  hungry: number;

  @Column('tinyint', {
    name: 'rename_flag',
    unsigned: true,
    default: () => "'0'",
  })
  renameFlag: number;

  @Column('int', { name: 'incubate', unsigned: true, default: () => "'0'" })
  incubate: number;

  @Column('tinyint', { name: 'autofeed', default: () => "'0'" })
  autofeed: number;
}
