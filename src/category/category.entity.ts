import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsString, IsEmail } from 'class-validator';


export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar'})
  name!: string;

  @Column({ unique: true })
  description: string;

  @IsOptional()
  @Column()
  image: string;
}