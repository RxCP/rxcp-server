import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from './user.entity';
import { UserService } from './user.service';
import { PaginationTransformer } from '../../common/interceptors/pagination.interceptors';
import {
  PaginationResponseInterface as PaginationResponse,
  ReactAdminPaginationRequestInterface as PaginationRequest,
} from '../../common/interfaces/pagination.interface';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @UseInterceptors(PaginationTransformer)
  @Get()
  async find(
    @Query() query: PaginationRequest,
  ): Promise<PaginationResponse<User>> {
    return this.userService.findAll(query);
  }
}
