import { Controller, Get, UseGuards, Req, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../authantication/roles.guard';
import { Roles } from '../authantication/roles.decorator';
import { UpdateUserDto, UserRole, Users } from '../users/users.entity';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(UserRole.ADMIN)
  @Get()
  findAll(@Req() req) {
    return this.usersService.findAll();
  }

  @Put(":id")
  @Roles(UserRole.ADMIN || UserRole.USER)
  Update(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    this.usersService.updateUser(id, UpdateUserDto)
  }
}
