import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
  debug: process.env.DEBUG || true,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  apiVersion: '1.0.0',
  apiRoutePrefix: 'api/v1',
  swagger: {
    title: 'API for rAthena servers',
    description: 'API for rAthena servers',
  },
}));
