import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsString, IsEmail } from 'class-validator';


export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;
}


export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    password?: string;
  
    @IsOptional()
    role?: UserRole;
  }