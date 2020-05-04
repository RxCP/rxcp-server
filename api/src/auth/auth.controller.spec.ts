import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from './constants';
import { UsersModule } from '../cp/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { User } from '../cp/user/user.entity';
import { testDatabase } from '../../test/test-db';

describe('Auth Controller', () => {
  let module: TestingModule;
  let controller: AuthController;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
        testDatabase([User], 'cp'),
        TypeOrmModule.forFeature([User], 'cp'),
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, JwtStrategy],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
