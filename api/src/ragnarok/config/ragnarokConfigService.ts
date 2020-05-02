import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
class RagnarokDBConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'ragnarok',
      type: this.configService.get<any>('database.ragnarok.type', 'mysql'),
      host: this.configService.get<string>(
        'database.ragnarok.host',
        'localhost',
      ),
      port: this.configService.get<number>('database.ragnarok.port', 3306),
      username: this.configService.get<string>('database.ragnarok.username'),
      password: this.configService.get<string>('database.ragnarok.password'),
      database: this.configService.get<string>('database.ragnarok.database'),
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: false,
    };
  }
}

export default RagnarokDBConfigService;
