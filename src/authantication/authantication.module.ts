import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthanticationService } from './authantication.service';
import { AuthanticationController } from './authantication.controller';
import { JwtStrategy } from './jwt.strategy';
import { Users } from '../users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({ secret: process.env.JWT_SECRET || 'your_secret_key', signOptions: { expiresIn: '1h' } }),
    PassportModule,
  ],
  controllers: [AuthanticationController],
  providers: [AuthanticationService, JwtStrategy],
  exports: [AuthanticationService],
})
export class AuthanticationModule {}
