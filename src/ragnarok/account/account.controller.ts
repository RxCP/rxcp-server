import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Query,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';

import { AccountService } from './account.service';
import { Login } from './account.login.entity';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';
import {
  PaginationResponseInterface as PaginationResponse,
  PaginationRequestInterface as PaginationRequest,
} from '../../common/interfaces/pagination.interface';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptors';
import { getPaginationForEntity } from '../../common/swagger/pagination.schema';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import {
  ApiTags,
  ApiResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

@UseInterceptors(ClassSerializerInterceptor, LoggingInterceptor)
@ApiTags('accounts')
@Controller('accounts')
export class AccountController {
  constructor(public accountService: AccountService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({
    type: getPaginationForEntity(Login),
  })
  findAll(
    @Query() query: PaginationRequest,
  ): Promise<PaginationResponse<Login>> {
    return this.accountService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse({
    type: Login,
  })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  @ApiConflictResponse({ description: 'Conflict' })
  async createOne(@Body() createAccountDto: CreateAccountDto): Promise<Login> {
    return this.accountService.createOne(createAccountDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.CONFLICT);
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOkResponse({
    type: Login,
  })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  async updateOne(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<Login> {
    return this.accountService.updateOne(id, updateAccountDto).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOkResponse({
    type: Login,
  })
  @ApiBadRequestResponse({ description: 'No result could be found' })
  async findOne(@Param('id') id: string): Promise<Login> {
    return this.accountService.findOne(id).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiResponse({ status: 202, description: 'Accepted' })
  async deleteOne(@Param('id') id: string): Promise<HttpException> {
    await this.accountService.deleteOne(id);
    throw new HttpException({}, HttpStatus.ACCEPTED);
  }
}
