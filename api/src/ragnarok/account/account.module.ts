import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './account.login.entity';

import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Login], 'ragnarok')],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
