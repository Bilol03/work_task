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
  description: string;
  
  @IsOptional()
  @Column()
  image: string;
}