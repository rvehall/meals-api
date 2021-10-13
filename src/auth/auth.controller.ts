import { Controller, Get, Param, Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('login')
  @Render('login')
  login() {
    return;
  }

  @Get('signup')
  @Render('signup')
  signup() {
    return;
  }

  @Get(':id')
  verifyToken(@Param(':id') id: string) {
      this.authService.verifyToken(id);
  }
}