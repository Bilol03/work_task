import { Test, TestingModule } from '@nestjs/testing';
import { AuthanticationService } from './authantication.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users/users.entity';

describe('AuthenticationService', () => {
  let authenticationService: AuthanticationService;
  let userRepository: Repository<Users>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthanticationService,
        JwtService,
        {
          provide: getRepositoryToken(Users), // Mock UserRepository
          useClass: Repository,
        },
      ],
    }).compile();

    authenticationService = module.get<AuthanticationService>(AuthanticationService);
    userRepository = module.get<Repository<Users>>(getRepositoryToken(Users));
  });

  it('should be defined', () => {
    expect(authenticationService).toBeDefined();
  });
});
