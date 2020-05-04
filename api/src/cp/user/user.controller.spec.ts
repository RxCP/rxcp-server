import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { testDatabase } from '../../../test/test-db';

describe('Users Controller', () => {
  let module: TestingModule;
  let controller: UsersController;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        testDatabase([User], 'cp'),
        TypeOrmModule.forFeature([User], 'cp'),
      ],
      controllers: [UsersController],
      providers: [UserService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
