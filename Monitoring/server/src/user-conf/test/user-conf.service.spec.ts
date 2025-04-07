import { Test, TestingModule } from '@nestjs/testing';
import { UserConfService } from '../user-conf.service';

describe('UserConfService', () => {
  let service: UserConfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserConfService],
    }).compile();

    service = module.get<UserConfService>(UserConfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
