import {
  Column,
  Entity,
  Index,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Index('name', ['userid'], {})
@Entity('login', { schema: 'ragnarok' })
export class Login {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'account_id', unsigned: true })
  accountId: number;

  @ApiProperty()
  @Column('varchar', { name: 'userid', length: 23, default: () => "''" })
  userid: string;

  @Exclude()
  @Column('varchar', {
    name: 'user_pass',
    length: 32,
    default: () => "''",
  })
  userPass: string;

  @ApiProperty()
  @Column('enum', { name: 'sex', enum: ['M', 'F', 'S'], default: () => "'M'" })
  sex: 'M' | 'F' | 'S';

  @ApiProperty()
  @Column('varchar', { name: 'email', length: 39, default: () => "''" })
  email: string;

  @ApiProperty()
  @Column('tinyint', { name: 'group_id', default: () => "'0'" })
  groupId: number;

  @ApiProperty()
  @Column('int', { name: 'state', unsigned: true, default: () => "'0'" })
  state: number;

  @ApiProperty()
  @Column('int', { name: 'unban_time', unsigned: true, default: () => "'0'" })
  unbanTime: number;

  @ApiProperty()
  @Column('int', {
    name: 'expiration_time',
    unsigned: true,
    default: () => "'0'",
  })
  expirationTime: number;

  @ApiProperty()
  @Column('mediumint', {
    name: 'logincount',
    unsigned: true,
    default: () => "'0'",
  })
  logincount: number;

  @ApiProperty()
  @Column('datetime', { name: 'lastlogin', nullable: true })
  lastlogin: Date | null;

  @ApiProperty()
  @Column('varchar', { name: 'last_ip', length: 100, default: () => "''" })
  lastIp: string;

  @ApiProperty()
  @Column('date', { name: 'birthdate', nullable: true })
  birthdate: string | null;

  @ApiProperty()
  @Column('tinyint', {
    name: 'character_slots',
    unsigned: true,
    default: () => "'0'",
  })
  characterSlots: number;

  @ApiProperty()
  @Exclude()
  @Column('varchar', { name: 'pincode', length: 4, default: () => "''" })
  pincode: string;

  @ApiProperty()
  @Exclude()
  @Column('int', {
    name: 'pincode_change',
    unsigned: true,
    default: () => "'0'",
  })
  pincodeChange: number;

  @ApiProperty()
  @Column('int', { name: 'vip_time', unsigned: true, default: () => "'0'" })
  vipTime: number;

  @ApiProperty()
  @Column('tinyint', { name: 'old_group', default: () => "'0'" })
  oldGroup: number;

  @BeforeInsert()
  async setUserPass() {
    // encrypt password here
  }

  constructor(partial: Partial<Login>) {
    Object.assign(this, partial);
  }
}
