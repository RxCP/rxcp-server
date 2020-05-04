import {
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
  IsIn,
  IsOptional,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Match } from '../../common/decorators/match.decorator';

export class CreateAccountDto {
  @IsNotEmpty({
    message: 'Username should not be empty',
  })
  @MinLength(4, {
    message: 'Username must be longer than or equal to 4 characters',
  })
  @MaxLength(23, {
    message: 'Username must be shorter than or equal to 23 characters',
  })
  @ApiProperty()
  userid: string;

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
  userPass: string;

  @ValidateIf((o) => o.userPass)
  @IsNotEmpty({
    message: 'Confirm password should not be empty',
  })
  @Match('userPass', {
    message: 'Password and confirm password does not match',
  })
  confirmPass: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(['m', 'f'])
  sex: 'M' | 'F';

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
    message: 'Birthdate should not be empty',
  })
  @ApiProperty()
  birthdate: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
