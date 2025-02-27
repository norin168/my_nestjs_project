import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user with an ID', () => {
      const userDto = { name: 'Test User', email: 'test@example.com' };
      const result = service.create(userDto);

      expect(result).toHaveProperty('id');
      expect(result.name).toBe(userDto.name);
      expect(result.email).toBe(userDto.email);
    });

    it('should add the user to the users array', () => {
      const initialCount = service.findAll().length;
      service.create({ name: 'Test User', email: 'test@example.com' });
      expect(service.findAll().length).toBe(initialCount + 1);
    });
  });
});
