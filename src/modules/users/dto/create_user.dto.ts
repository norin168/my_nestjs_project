import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'First name must be at least 3 characters' })
  @MaxLength(15, { message: 'First name must not exceed 15 characters' })
  firstName: string;

  @IsString()
  @MinLength(3, { message: 'Last name must be at least 3 characters' })
  @MaxLength(15, { message: 'Last name must not exceed 15 characters' })
  lastName: string;

  @IsString()
  @MinLength(6, { message: 'Username must be at least 6 characters' })
  @MaxLength(15, { message: 'Username must not exceed 15 characters' })
  username: string;

  @IsString()
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
  password: string;

  @IsString()
  @Matches(/^\d+$/, { message: 'Phone number must contain only digits.' })
  phone: string;

  @IsString()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsEnum(['Admin', 'User'])
  role: 'Admin' | 'User';
}
