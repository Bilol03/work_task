import { Controller, Post, Body } from '@nestjs/common';
import { AuthanticationService } from './authantication.service';
import { UserRole } from '../users/users.entity';

@Controller('auth')
export class AuthanticationController {
  constructor(private readonly authService: AuthanticationService) {}

  @Post('register')
  register(@Body() body: { name: string; email: string; password: string; role: UserRole }) {
    return this.authService.register(body.name, body.email, body.password, body.role);
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
  @Post('refresh')
  async refresh(@Body() body: { email: string; password: string }) {
    return this.authService.refresh(body.email, body.password)
    
  }
}

