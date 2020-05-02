import { Column, Entity } from 'typeorm';

@Entity('skill_homunculus', { schema: 'ragnarok' })
export class SkillHomunculus {
  @Column('int', { primary: true, name: 'homun_id' })
  homunId: number;

  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('smallint', { name: 'lv' })
  lv: number;
}
