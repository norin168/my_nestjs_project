import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const userExits = await this.usersService.findUserByUsername(
      loginDto.username,
    );

    if (!userExits) {
      throw new NotFoundException('User Not Found');
    }

    const isPasswordValid = await this.usersService.comparePassword(
      loginDto.password,
      userExits!.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: userExits.id, username: userExits.username };

    const access_token = await this.jwtService.signAsync(payload);

    if (!access_token) {
      throw new UnauthorizedException('Invalid token');
    }

    return {
      access_token: access_token,
      token_type: 'Bearer',
    };
  }

  async register() {}

  async forgetPassword() {}

  async logout() {}
}
