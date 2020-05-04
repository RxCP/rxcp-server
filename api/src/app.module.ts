import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import application from './config/application';
import database from './config/database';

import { RagnarokModule } from './ragnarok/ragnarok.module';
import { AuthModule } from './auth/auth.module';

import { CpModule } from './cp/cp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [application, database],
    }),
    RagnarokModule,
    AuthModule,
    CpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
