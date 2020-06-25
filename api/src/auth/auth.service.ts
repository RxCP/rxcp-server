import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { User } from '../cp/user/user.entity';
import { UserService } from '../cp/user/user.service';
import { AuthTokenResponseInterface } from '../common/interfaces/authToken.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }

    return Promise.reject({ message: 'User not found' });
  }

  async login(userId: number): Promise<AuthTokenResponseInterface> {
    const payload = { sub: userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
