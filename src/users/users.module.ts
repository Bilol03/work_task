import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity'; // Ensure correct import path

@Module({
  imports: [TypeOrmModule.forFeature([Users])], // Register User entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export for usage in other modules
})
export class UsersModule {}
