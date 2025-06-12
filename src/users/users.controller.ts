import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const user = await this.usersService.validateUser(body.username, body.password);
    if (user) {
      return { success: true, message: 'Login correcto' };
    } else {
      return { success: false, message: 'Credenciales inválidas' };
    }
  }
}
