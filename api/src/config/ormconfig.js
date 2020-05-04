// Migration is applicable only for the cp module not ragnarok
module.exports = {
  type: process.env.CP_DB_CONNECTION,
  host: process.env.CP_DB_HOST,
  port: parseInt(process.env.CP_DB_PORT, 10),
  username: process.env.CP_DB_USERNAME,
  password: process.env.CP_DB_PASSWORD,
  database: process.env.CP_DB_DATABASE,
  entities: ['src/!(ragnarok)/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
};