import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'cp')
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
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
