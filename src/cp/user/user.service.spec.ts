import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { testDatabase } from '../../../test/test-db';

describe('UsersService', () => {
  let module: TestingModule;
  let service: UserService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        testDatabase([User], 'cp'),
        TypeOrmModule.forFeature([User], 'cp'),
      ],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
