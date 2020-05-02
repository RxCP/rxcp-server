import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import RagnarokConfigService from './config/ragnarokConfigService';

import { AccountModule } from './account/account.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'ragnarok',
      imports: [ConfigModule],
      useClass: RagnarokConfigService,
      inject: [ConfigService],
    }),
    AccountModule,
    CharacterModule,
  ],
  controllers: [],
  providers: [],
})
export class RagnarokModule {
  // constructor(private connection: Connection) {}
}
