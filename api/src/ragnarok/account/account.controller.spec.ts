import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './account.login.entity';
import { testDatabase } from '../../../test/test-db';
import {
  PaginationResponseInterface as PaginationResponse,
  PaginationRequestInterface as PaginationRequest,
} from '../../common/interfaces/pagination.interface';

describe('AccountController', () => {
  let app: TestingModule;
  let accountService: AccountService;
  let accountController: AccountController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        testDatabase([Login], 'ragnarok'),
        TypeOrmModule.forFeature([Login], 'ragnarok'),
      ],
      controllers: [AccountController],
      providers: [AccountService],
    }).compile();

    accountService = app.get<AccountService>(AccountService);
    accountController = app.get<AccountController>(AccountController);
  });

  afterAll(async () => {
    await app.close();
  });

  it('findAll', async () => {
    let result: Promise<PaginationResponse<Login>>;
    const query: PaginationRequest = {};
    jest.spyOn(accountService, 'findAll').mockImplementation(() => result);
    expect(await accountController.findAll(query)).toBe(result);
  });

  it('findOne', async () => {
    let result: Promise<Login>;
    jest
      .spyOn(accountService, 'findOne')
      .mockImplementation(() => Promise.resolve(result));
    expect(await accountController.findOne('1')).toBe(result);
  });
});
