import { Controller, Delete, Get, Patch, Post, Put, Render, Param, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Console } from 'console';

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
}
