import { Test, TestingModule } from '@nestjs/testing';
import { AuthanticationController } from './authantication.controller';
import { AuthanticationService } from './authantication.service';
import { User, UserRole } from '../users/users.entity'; // Import User and UserRole

describe('AuthenticationController', () => {
  let authController: AuthanticationController;
  let authService: AuthanticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthanticationController],
      providers: [
        {
          provide: AuthanticationService,
          useValue: {
            register: jest.fn(), // Mock register method
            login: jest.fn(), // Mock login method
            refreshToken: jest.fn(), // Mock refreshToken method
          },
        },
      ],
    }).compile();

    authController = module.get<AuthanticationController>(AuthanticationController);
    authService = module.get<AuthanticationService>(AuthanticationService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('should call register method', async () => {
    const mockUserDto = { name: 'John Doe', email: 'test@example.com', password: 'password', role: UserRole.USER };
    const mockResponse: User = {
      id: 1,
      ...mockUserDto,
    } as User; // Ensure it matches the User type

    jest.spyOn(authService, 'register').mockResolvedValue(mockResponse);

    expect(await authController.register(mockUserDto)).toBe(mockResponse);
    expect(authService.register).toHaveBeenCalledWith(expect.objectContaining(mockUserDto));
  });
});
