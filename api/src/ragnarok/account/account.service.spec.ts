import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './account.login.entity';
import { testDatabase } from '../../../test/test-db';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';

describe('AccountService', () => {
  let app: TestingModule;
  let accountService: AccountService;
  let account: Login;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        testDatabase([Login], 'ragnarok'),
        TypeOrmModule.forFeature([Login], 'ragnarok'),
      ],
      controllers: [],
      providers: [AccountService],
    }).compile();

    accountService = app.get<AccountService>(AccountService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('CRUD', () => {
    const testAccount = new CreateAccountDto();
    testAccount.userid = 'testusername';
    testAccount.userPass = 'testpassword';
    testAccount.email = 'testemail@test.com';
    testAccount.birthdate = '2020-01-01';

    it('should be able to create one account', async () => {
      account = await accountService.createOne(testAccount);
      expect(account).toBeDefined();
    });

    it('should be able to fetch one account', async () => {
      const getAccount = await accountService.findOne(
        account.accountId.toString(),
      );
      expect(getAccount).toStrictEqual(account);
    });

    it('should be able to update one account', async () => {
      const updateAccountDto = new UpdateAccountDto();
      updateAccountDto.userid = 'newtestusername';
      const res = await accountService.updateOne(
        account.accountId.toString(),
        updateAccountDto,
      );
      expect(res.userid).toContain(updateAccountDto.userid);
    });

    it('should be able to delete one account', async () => {
      const deleted = await accountService.deleteOne(
        account.accountId.toString(),
      );
      expect(deleted).toBeDefined();
    });
  });
});
