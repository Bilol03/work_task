import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(), // Mock findAll method
            findOne: jest.fn(), // Mock findOne method
            update: jest.fn(), // Mock update method
            remove: jest.fn(), // Mock remove method
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('should call findAll and return users', async () => {
    const mockUsers: { id: number; name: string; }[] = [{ id: 1, name: 'John Doe' } ];
    jest.spyOn(usersService, 'findAll').mockResolvedValue(mockUsers);

    expect(await usersController.findAll).toBe(mockUsers);
    expect(usersService.findAll).toHaveBeenCalled();
  });
});
