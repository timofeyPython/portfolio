import { Test, TestingModule } from '@nestjs/testing';
import { RightsUsersService } from '../rights-user.service';

describe('RightsService', () => {
  let service: RightsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RightsUsersService],
    }).compile();

    service = module.get<RightsUsersService>(RightsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
