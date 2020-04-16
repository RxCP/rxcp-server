import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  find() {
    return this.userService.findAll();
  }
}
