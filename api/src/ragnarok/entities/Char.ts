import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('name_key', ['name'], { unique: true })
@Index('account_id', ['accountId'], {})
@Index('party_id', ['partyId'], {})
@Index('guild_id', ['guildId'], {})
@Index('online', ['online'], {})
@Entity('char', { schema: 'ragnarok' })
export class Char {
  @PrimaryGeneratedColumn({ type: 'int', name: 'char_id', unsigned: true })
  charId: number;

  @Column('int', { name: 'account_id', unsigned: true, default: () => "'0'" })
  accountId: number;

  @Column('tinyint', { name: 'char_num', width: 1, default: () => "'0'" })
  charNum: boolean;

  @Column('varchar', {
    name: 'name',
    unique: true,
    length: 30,
    default: () => "''",
  })
  name: string;

  @Column('smallint', { name: 'class', unsigned: true, default: () => "'0'" })
  class: number;

  @Column('smallint', {
    name: 'base_level',
    unsigned: true,
    default: () => "'1'",
  })
  baseLevel: number;

  @Column('smallint', {
    name: 'job_level',
    unsigned: true,
    default: () => "'1'",
  })
  jobLevel: number;

  @Column('bigint', { name: 'base_exp', unsigned: true, default: () => "'0'" })
  baseExp: string;

  @Column('bigint', { name: 'job_exp', unsigned: true, default: () => "'0'" })
  jobExp: string;

  @Column('int', { name: 'zeny', unsigned: true, default: () => "'0'" })
  zeny: number;

  @Column('smallint', { name: 'str', unsigned: true, default: () => "'0'" })
  str: number;

  @Column('smallint', { name: 'agi', unsigned: true, default: () => "'0'" })
  agi: number;

  @Column('smallint', { name: 'vit', unsigned: true, default: () => "'0'" })
  vit: number;

  @Column('smallint', { name: 'int', unsigned: true, default: () => "'0'" })
  int: number;

  @Column('smallint', { name: 'dex', unsigned: true, default: () => "'0'" })
  dex: number;

  @Column('smallint', { name: 'luk', unsigned: true, default: () => "'0'" })
  luk: number;

  @Column('int', { name: 'max_hp', unsigned: true, default: () => "'0'" })
  maxHp: number;

  @Column('int', { name: 'hp', unsigned: true, default: () => "'0'" })
  hp: number;

  @Column('int', { name: 'max_sp', unsigned: true, default: () => "'0'" })
  maxSp: number;

  @Column('int', { name: 'sp', unsigned: true, default: () => "'0'" })
  sp: number;

  @Column('int', { name: 'status_point', unsigned: true, default: () => "'0'" })
  statusPoint: number;

  @Column('int', { name: 'skill_point', unsigned: true, default: () => "'0'" })
  skillPoint: number;

  @Column('int', { name: 'option', default: () => "'0'" })
  option: number;

  @Column('tinyint', { name: 'karma', default: () => "'0'" })
  karma: number;

  @Column('smallint', { name: 'manner', default: () => "'0'" })
  manner: number;

  @Column('int', { name: 'party_id', unsigned: true, default: () => "'0'" })
  partyId: number;

  @Column('int', { name: 'guild_id', unsigned: true, default: () => "'0'" })
  guildId: number;

  @Column('int', { name: 'pet_id', unsigned: true, default: () => "'0'" })
  petId: number;

  @Column('int', { name: 'homun_id', unsigned: true, default: () => "'0'" })
  homunId: number;

  @Column('int', { name: 'elemental_id', unsigned: true, default: () => "'0'" })
  elementalId: number;

  @Column('tinyint', { name: 'hair', unsigned: true, default: () => "'0'" })
  hair: number;

  @Column('smallint', {
    name: 'hair_color',
    unsigned: true,
    default: () => "'0'",
  })
  hairColor: number;

  @Column('smallint', {
    name: 'clothes_color',
    unsigned: true,
    default: () => "'0'",
  })
  clothesColor: number;

  @Column('smallint', { name: 'body', unsigned: true, default: () => "'0'" })
  body: number;

  @Column('smallint', { name: 'weapon', unsigned: true, default: () => "'0'" })
  weapon: number;

  @Column('smallint', { name: 'shield', unsigned: true, default: () => "'0'" })
  shield: number;

  @Column('smallint', {
    name: 'head_top',
    unsigned: true,
    default: () => "'0'",
  })
  headTop: number;

  @Column('smallint', {
    name: 'head_mid',
    unsigned: true,
    default: () => "'0'",
  })
  headMid: number;

  @Column('smallint', {
    name: 'head_bottom',
    unsigned: true,
    default: () => "'0'",
  })
  headBottom: number;

  @Column('smallint', { name: 'robe', unsigned: true, default: () => "'0'" })
  robe: number;

  @Column('varchar', { name: 'last_map', length: 11, default: () => "''" })
  lastMap: string;

  @Column('smallint', { name: 'last_x', unsigned: true, default: () => "'53'" })
  lastX: number;

  @Column('smallint', {
    name: 'last_y',
    unsigned: true,
    default: () => "'111'",
  })
  lastY: number;

  @Column('varchar', { name: 'save_map', length: 11, default: () => "''" })
  saveMap: string;

  @Column('smallint', { name: 'save_x', unsigned: true, default: () => "'53'" })
  saveX: number;

  @Column('smallint', {
    name: 'save_y',
    unsigned: true,
    default: () => "'111'",
  })
  saveY: number;

  @Column('int', { name: 'partner_id', unsigned: true, default: () => "'0'" })
  partnerId: number;

  @Column('tinyint', { name: 'online', default: () => "'0'" })
  online: number;

  @Column('int', { name: 'father', unsigned: true, default: () => "'0'" })
  father: number;

  @Column('int', { name: 'mother', unsigned: true, default: () => "'0'" })
  mother: number;

  @Column('int', { name: 'child', unsigned: true, default: () => "'0'" })
  child: number;

  @Column('int', { name: 'fame', unsigned: true, default: () => "'0'" })
  fame: number;

  @Column('smallint', { name: 'rename', unsigned: true, default: () => "'0'" })
  rename: number;

  @Column('int', { name: 'delete_date', unsigned: true, default: () => "'0'" })
  deleteDate: number;

  @Column('int', { name: 'moves', unsigned: true, default: () => "'0'" })
  moves: number;

  @Column('int', { name: 'unban_time', unsigned: true, default: () => "'0'" })
  unbanTime: number;

  @Column('tinyint', { name: 'font', unsigned: true, default: () => "'0'" })
  font: number;

  @Column('int', {
    name: 'uniqueitem_counter',
    unsigned: true,
    default: () => "'0'",
  })
  uniqueitemCounter: number;

  @Column('enum', { name: 'sex', enum: ['M', 'F', 'U'], default: () => "'U'" })
  sex: 'M' | 'F' | 'U';

  @Column('tinyint', {
    name: 'hotkey_rowshift',
    unsigned: true,
    default: () => "'0'",
  })
  hotkeyRowshift: number;

  @Column('int', { name: 'clan_id', unsigned: true, default: () => "'0'" })
  clanId: number;

  @Column('datetime', { name: 'last_login', nullable: true })
  lastLogin: Date | null;

  @Column('int', { name: 'title_id', unsigned: true, default: () => "'0'" })
  titleId: number;

  @Column('tinyint', {
    name: 'show_equip',
    unsigned: true,
    default: () => "'0'",
  })
  showEquip: number;
}
