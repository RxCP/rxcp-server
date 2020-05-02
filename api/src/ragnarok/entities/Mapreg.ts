import { Column, Entity } from 'typeorm';

@Entity('mapreg', { schema: 'ragnarok' })
export class Mapreg {
  @Column('varchar', { primary: true, name: 'varname', length: 32 })
  varname: string;

  @Column('int', {
    primary: true,
    name: 'index',
    unsigned: true,
    default: () => "'0'",
  })
  index: number;

  @Column('varchar', { name: 'value', length: 255 })
  value: string;
}
