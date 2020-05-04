import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import {
  PaginationResponseInterface as PaginationResponse,
  ReactAdminPaginationRequestInterface as PaginationRequest,
} from '../../common/interfaces/pagination.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'cp')
    private userRepository: Repository<User>,
  ) {}

  async findAll(query: PaginationRequest): Promise<PaginationResponse<User>> {
    const take = query._end || 10; // limit
    const skip = query._start || 0; // offset
    const page = Math.floor(query._start / query._end);


    const [result, total] = await this.userRepository.findAndCount({
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

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const countEmail = await this.userRepository.count({
      where: { email },
    });

    if (countEmail) {
      return Promise.reject({
        message: `Email address is already in use`,
      });
    }

    const entity = Object.assign(new User(), createUserDto);
    return this.userRepository.save(entity);
  }
}
