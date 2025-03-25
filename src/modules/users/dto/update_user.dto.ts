//create UpdateUserDto class with mapped-types using TypeORM and class-validator
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create_user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @MinLength(1, {
    message:
      'This first name is required please input or change your FirstName',
  })
  firstName: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNumber()
  @MinLength(8, {
    message:
      'This Number Should Be Minimum 8 Digits Please Input or Change Your Phone Number',
  })
  @MaxLength(9, {
    message:
      'This Number Should Be Maximum 9 Digits Please Input or Change Your Phone Number',
  })
  phone?: string;
}
