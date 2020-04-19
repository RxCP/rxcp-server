import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UserService } from '../cp/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<object> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;
      return result;
    }

    return Promise.reject({ message: 'User not found' });
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
