// import * as request from 'supertest';
// import { Test } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import { ValidationPipe } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// import { AccountModule } from '../../src/ragnarok/account/account.module';
// import { AccountService } from '../../src/ragnarok/account/account.service';
// import { CharacterModule } from '../../src/ragnarok/character/character.module';
// import { Login } from '../../src/ragnarok/account/account.login.entity';
// import { testDatabase } from '../test-db';

// describe('Ragnarok Account Module (e2e)', () => {
//   let app: INestApplication;

//   beforeAll(async () => {
//     const module = await Test.createTestingModule({
//       imports: [CharacterModule],
//       controllers: [],
//       providers: [],
//     }).compile();

//     console.log(app)
//     app = module.createNestApplication();
//     await app.init();
//   });

//   afterAll(async () => {
//     await app.close();
//   });

//   it('/GET accounts', () => {
//     return true
//   });

//   // it('/GET accounts/1', () => {
//   //   return request(app.getHttpServer()).get('/api/v1/accounts/1').expect(200);
//   // });
// });
