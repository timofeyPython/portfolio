import { Test, TestingModule } from '@nestjs/testing';
import { GroupConfService } from '../group-conf.service';

describe('GroupConfService', () => {
  let service: GroupConfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupConfService],
    }).compile();

    service = module.get<GroupConfService>(GroupConfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
