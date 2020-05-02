import { Column, Entity } from 'typeorm';

@Entity('friends', { schema: 'ragnarok' })
export class Friends {
  @Column('int', { primary: true, name: 'char_id', default: () => "'0'" })
  charId: number;

  @Column('int', { primary: true, name: 'friend_id', default: () => "'0'" })
  friendId: number;
}
