import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/modules/users/dto/create_user.dto';

export class LoginDto extends PickType(CreateUserDto, [
  'username',
  'password',
]) {}
