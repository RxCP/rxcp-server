import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import { EntitySchema } from '../node_modules/typeorm/entity-schema/EntitySchema';

export const testDatabase = (
  entities?: (() => void | string | EntitySchema)[],
  connection?: string,
): DynamicModule => {
  return TypeOrmModule.forRoot({
    name: connection || 'default',
    type: 'mysql',
    host: '0.0.0.0',
    port: 3306,
    username: 'root',
    password: 'ragnarok',
    database: 'test_ragnarok',
    entities: entities || ['src/**/**/*.entity{.ts,.js}'],
    synchronize: false,
  });
};
