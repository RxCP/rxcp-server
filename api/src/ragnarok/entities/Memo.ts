import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('char_id', ['charId'], {})
@Entity('memo', { schema: 'ragnarok' })
export class Memo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'memo_id', unsigned: true })
  memoId: number;

  @Column('int', { name: 'char_id', unsigned: true, default: () => "'0'" })
  charId: number;

  @Column('varchar', { name: 'map', length: 11, default: () => "''" })
  map: string;

  @Column('smallint', { name: 'x', unsigned: true, default: () => "'0'" })
  x: number;

  @Column('smallint', { name: 'y', unsigned: true, default: () => "'0'" })
  y: number;
}
