import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mail_attachments', { schema: 'ragnarok' })
export class MailAttachments {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('smallint', {
    primary: true,
    name: 'index',
    unsigned: true,
    default: () => "'0'",
  })
  index: number;

  @Column('smallint', { name: 'nameid', unsigned: true, default: () => "'0'" })
  nameid: number;

  @Column('int', { name: 'amount', unsigned: true, default: () => "'0'" })
  amount: number;

  @Column('tinyint', { name: 'refine', unsigned: true, default: () => "'0'" })
  refine: number;

  @Column('tinyint', {
    name: 'attribute',
    unsigned: true,
    default: () => "'0'",
  })
  attribute: number;

  @Column('smallint', { name: 'identify', default: () => "'0'" })
  identify: number;

  @Column('smallint', { name: 'card0', unsigned: true, default: () => "'0'" })
  card0: number;

  @Column('smallint', { name: 'card1', unsigned: true, default: () => "'0'" })
  card1: number;

  @Column('smallint', { name: 'card2', unsigned: true, default: () => "'0'" })
  card2: number;

  @Column('smallint', { name: 'card3', unsigned: true, default: () => "'0'" })
  card3: number;

  @Column('smallint', { name: 'option_id0', default: () => "'0'" })
  optionId0: number;

  @Column('smallint', { name: 'option_val0', default: () => "'0'" })
  optionVal0: number;

  @Column('tinyint', { name: 'option_parm0', default: () => "'0'" })
  optionParm0: number;

  @Column('smallint', { name: 'option_id1', default: () => "'0'" })
  optionId1: number;

  @Column('smallint', { name: 'option_val1', default: () => "'0'" })
  optionVal1: number;

  @Column('tinyint', { name: 'option_parm1', default: () => "'0'" })
  optionParm1: number;

  @Column('smallint', { name: 'option_id2', default: () => "'0'" })
  optionId2: number;

  @Column('smallint', { name: 'option_val2', default: () => "'0'" })
  optionVal2: number;

  @Column('tinyint', { name: 'option_parm2', default: () => "'0'" })
  optionParm2: number;

  @Column('smallint', { name: 'option_id3', default: () => "'0'" })
  optionId3: number;

  @Column('smallint', { name: 'option_val3', default: () => "'0'" })
  optionVal3: number;

  @Column('tinyint', { name: 'option_parm3', default: () => "'0'" })
  optionParm3: number;

  @Column('smallint', { name: 'option_id4', default: () => "'0'" })
  optionId4: number;

  @Column('smallint', { name: 'option_val4', default: () => "'0'" })
  optionVal4: number;

  @Column('tinyint', { name: 'option_parm4', default: () => "'0'" })
  optionParm4: number;

  @Column('bigint', { name: 'unique_id', unsigned: true, default: () => "'0'" })
  uniqueId: string;

  @Column('tinyint', { name: 'bound', unsigned: true, default: () => "'0'" })
  bound: number;
}
