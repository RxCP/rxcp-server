import { Column, Entity } from 'typeorm';

@Entity('ipbanlist', { schema: 'ragnarok' })
export class Ipbanlist {
  @Column('varchar', {
    primary: true,
    name: 'list',
    length: 15,
    default: () => "''",
  })
  list: string;

  @Column('datetime', { primary: true, name: 'btime' })
  btime: Date;

  @Column('datetime', { name: 'rtime' })
  rtime: Date;

  @Column('varchar', { name: 'reason', length: 255, default: () => "''" })
  reason: string;
}
