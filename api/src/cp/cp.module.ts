import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import CpConfigService from './config/cpConfigService';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'cp',
      imports: [ConfigModule],
      useClass: CpConfigService,
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  providers: [],
  exports: [],
})
export class CpModule {}
