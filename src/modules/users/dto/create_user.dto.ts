import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @MinLength(3, { message: 'First name must be at least 3 characters' })
  @MaxLength(15, { message: 'First name must not exceed 15 characters' })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @MinLength(3, { message: 'Last name must be at least 3 characters' })
  @MaxLength(15, { message: 'Last name must not exceed 15 characters' })
  readonly lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'Username cannot be empty' })
  @MinLength(6, { message: 'Username must be at least 6 characters' })
  @MaxLength(15, { message: 'Username must not exceed 15 characters' })
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(/\d/, { message: 'Password must contain at least one number' })
  @Matches(/[@$!%*?&]/, {
    message: 'Password must contain at least one special character (@$!%*?&)',
  })
  readonly password: string;

  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsString()
  @Matches(/^\d+$/, { message: 'Phone number must contain only digits.' })
  readonly phone?: string;

  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsString()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  readonly email?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === null || value === undefined) {
      return 'User';
    }
    return value;
  })
  @IsEnum(['Admin', 'User'])
  readonly role: 'Admin' | 'User';
}
