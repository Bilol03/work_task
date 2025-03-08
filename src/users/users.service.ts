import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto, Users } from './users.entity'; // Ensure correct path
import { agent } from 'supertest';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  // Method to get all users
  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users | null>{

    await this.userRepository.update(id, updateUserDto); 
    return this.userRepository.findOne({ where: { id } });
  }


}
