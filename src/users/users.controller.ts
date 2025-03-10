import { Controller, Get, UseGuards, Req, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../authantication/roles.decorator';
import { UserRole } from '../users/users.entity';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(UserRole.ADMIN)
  @Get()
  findAll(@Req() req) {
    return this.usersService.findAll();
  }

  @Roles(UserRole.USER)
  @Put(":id")
  Update(@Req() req, @Param() id: number) {
    return this.usersService.updateUser(req, id)
  }

  @Roles(UserRole.USER || UserRole.ADMIN)
  @Get(":id")
  findOne(@Req() req, @Param() id: number) {
    return this.usersService.findOne(id)
  }

  @Roles(UserRole.ADMIN || UserRole.USER) 
  @Delete(":id")
  deleteUser(@Req() req, @Param() id: number) {
    return this.usersService.deleteUser(id)
  }

}
