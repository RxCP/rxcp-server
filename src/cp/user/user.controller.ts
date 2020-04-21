import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from "express";

import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async find(@Res() res: Response) {
    const users = await this.userService.findAll();
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', users.length.toString())
    res.send(users);
  }
}
