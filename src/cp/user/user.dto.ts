import {
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { Match } from '../../common/decorators/match.decorator';

export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'Invalid email address',
      always: true,
    },
  )
  @ApiProperty()
  email: string;

  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  @MinLength(8, {
    message: 'Password must be longer than or equal to 8 characters',
  })
  @MaxLength(31, {
    message: 'Password must be shorter than or equal to 31 characters',
  })
  @ApiProperty()
  password: string;

  @ValidateIf((o) => o.password)
  @IsNotEmpty({
    message: 'Confirm password should not be empty',
  })
  @Match('password', {
    message: 'Password and confirm password does not match',
  })
  @ApiProperty()
  confirmPassword: string;

  @IsNotEmpty({
    message: 'First name should not be empty',
  })
  @MinLength(1, {
    message: 'First name must be longer than or equal to 1 characters',
  })
  @MaxLength(31, {
    message: 'First name must be shorter than or equal to 31 characters',
  })
  @ApiProperty()
  firstName: string;

  @IsNotEmpty({
    message: 'Last name should not be empty',
  })
  @MinLength(1, {
    message: 'Last name must be longer than or equal to 1 characters',
  })
  @MaxLength(31, {
    message: 'Last name must be shorter than or equal to 31 characters',
  })
  @ApiProperty()
  lastName: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class LoginUserDto extends PartialType(
  PickType(CreateUserDto, ['email', 'password']),
) {}
