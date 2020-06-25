import {
  Controller,
  Body,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from '../cp/user/user.service';
import { CreateUserDto, LoginUserDto } from '../cp/user/user.dto';
import { AuthTokenResponseInterface } from '../common/interfaces/authToken.interface';
import { MessageResponseInterface } from '../common/interfaces/messageResponse.interface';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<AuthTokenResponseInterface> {
    const { id } = await this.userService.findByEmail(loginUserDto.email);
    return this.authService.login(id);
  }

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<MessageResponseInterface> {
    await this.userService.create(createUserDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    });

    return {
      statusCode: 200,
      message: 'Registration Successfull',
    };
  }
}
