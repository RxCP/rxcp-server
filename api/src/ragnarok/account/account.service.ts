import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import * as crypto from 'crypto';
import { DeleteResult } from '../../../node_modules/typeorm/query-builder/result/DeleteResult';
import { Login } from './account.login.entity';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';
import {
  PaginationResponseInterface as PaginationResponse,
  PaginationRequestInterface as PaginationRequest,
} from '../../common/interfaces/pagination.interface';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Login, 'ragnarok')
    private accountsRepository: Repository<Login>,
  ) {}

  /**
   * Get all `Accounts`
   */
  async findAll(query: PaginationRequest): Promise<PaginationResponse<Login>> {
    const take = query.limit || 10;
    const page = query.page || 1;

    const skip = Math.floor(page - 1) * take;

    const [result, total] = await this.accountsRepository.findAndCount({
      take,
      skip,
    });

    return {
      totalCount: total,
      page,
      perPage: take,
      results: result,
    };
  }

  /**
   * Finds `Account`
   */
  async findOne(id: string): Promise<Login> {
    return this.accountsRepository
      .findOneOrFail({ where: { accountId: id } })
      .catch(() => {
        return Promise.reject({
          message: `No result could be found`,
        });
      });
  }

  /**
   * Create single `Account`
   * @param createAccountDto the DTO for creating an account see `./ragnarok/account.dto.ts`
   */
  async createOne(createAccountDto: CreateAccountDto): Promise<Login> {
    const { userid, email, userPass, sex, birthdate } = createAccountDto;

    // check any existing account first before saving
    const countUserId = await this.accountsRepository.count({
      where: { userid },
    });

    if (countUserId) {
      return Promise.reject({
        message: `Username is already taken`,
      });
    }

    const countEmail = await this.accountsRepository.count({
      where: { email },
    });

    if (countEmail) {
      return Promise.reject({
        message: `Email address is already in use`,
      });
    }

    // TODO: add config for md5 password
    const hashPassword = crypto
      .createHash('md5')
      .update(userPass)
      .digest('hex');

    const newAccount = new Login({
      userid,
      userPass: hashPassword,
      email,
      sex,
      birthdate,
    });

    return this.accountsRepository.save(newAccount);
  }

  /**
   * Update single `Account`
   * @param id the account's id `account_id`
   * @param updateAccountDto the DTO for updating an account see `./ragnarok/account.dto.ts`
   */
  async updateOne(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Login> {
    const { userid, email } = updateAccountDto;

    const countUserId = await this.accountsRepository.count({
      where: { userid, accountId: Not(id) },
    });

    if (countUserId) {
      return Promise.reject({
        message: `Username is already taken`,
      });
    }

    const countEmail = await this.accountsRepository.count({
      where: { email, accountId: Not(id) },
    });

    if (countEmail) {
      return Promise.reject({
        message: `Email address is already in use`,
      });
    }

    await this.accountsRepository.update(id, updateAccountDto);

    return this.findOne(id).catch(() => {
      return Promise.reject({
        message: `Error updating data`,
      });
    });
  }

  /**
   * Delete single `Account`
   *
   * @param id the account's id `account_id`
   */
  deleteOne(id: string): Promise<DeleteResult> {
    return this.accountsRepository.delete(id);
  }
}
