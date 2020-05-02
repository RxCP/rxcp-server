import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
class CpConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'cp',
      type: this.configService.get<any>('database.controlPanel.type', 'mysql'),
      host: this.configService.get<string>(
        'database.controlPanel.host',
        'localhost',
      ),
      port: this.configService.get<number>('database.controlPanel.port', 3306),
      username: this.configService.get<string>(
        'database.controlPanel.username',
      ),
      password: this.configService.get<string>(
        'database.controlPanel.password',
      ),
      database: this.configService.get<string>(
        'database.controlPanel.database',
      ),
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: false,
    };
  }
}

export default CpConfigService;
