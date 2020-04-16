import { Controller, Body, Request, Post, UseGuards, HttpException,
  HttpStatus, } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from '../cp/user/user.service';
import { CreateUserDto } from '../cp/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<object> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<object> {
    await this.userService.create(createUserDto).catch(err => {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    })

    return {
      statusCode: 200,
      message: 'Registration Successfull'
    }
  }
}
