import { Controller, Get, UseGuards, Req, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../authantication/roles.decorator';
import { UserRole } from '../users/users.entity';

@Controller('category')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }
}
