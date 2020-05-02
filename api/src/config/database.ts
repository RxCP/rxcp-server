import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  ragnarok: {
    type: process.env.RAGNAROK_DB_CONNECTION,
    host: process.env.RAGNAROK_DB_HOST,
    port: parseInt(process.env.RAGNAROK_DB_PORT, 10),
    username: process.env.RAGNAROK_DB_USERNAME,
    password: process.env.RAGNAROK_DB_PASSWORD,
    database: process.env.RAGNAROK_DB_DATABASE,
  },
  controlPanel: {
    type: process.env.CP_DB_CONNECTION,
    host: process.env.CP_DB_HOST,
    port: parseInt(process.env.CP_DB_PORT, 10),
    username: process.env.CP_DB_USERNAME,
    password: process.env.CP_DB_PASSWORD,
    database: process.env.CP_DB_DATABASE,
    synchronize: true,
  },
}));
