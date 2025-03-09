import { Injectable, Param } from '@nestjs/common';
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

  async updateUser(req, id: number): Promise<Users | null>{
    id = +id['id']
    await this.userRepository.update(id, req.body); 
    return this.userRepository.findOne({ where: { id } });
  }

  async findOne(id: number): Promise<Users | null>{
    id = +id['id']
    return this.userRepository.findOne({ where: { id } })
  }

  async deleteUser(id: number): Promise<{message: String}>{
    id = id['id']
    const user = await this.userRepository.findOne({ where: { id } });
    if(!user)  throw new Error(`User with ID ${id} not found`);

    await this.userRepository.delete(id)
    return { message: `User with ID ${id} deleted successfully` };
  }
}
