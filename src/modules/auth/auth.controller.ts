import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register() {
    return this.authService.register();
  }

  @Post('forget-password')
  forgetPassword() {
    return this.authService.forgetPassword();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
