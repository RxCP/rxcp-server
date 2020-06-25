import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { validateOrReject } from 'class-validator';

import { LoginUserDto } from '../cp/user/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const loginUser = new LoginUserDto();
    loginUser.email = email;
    loginUser.password = password;

    try {
      await validateOrReject(loginUser);
      const { ...result } = await this.authService.validateUser(
        email,
        password,
      );
      return result;
    } catch (errors) {
      throw new HttpException(
        'Incorrect email address or password',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
