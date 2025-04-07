import { Test, TestingModule } from '@nestjs/testing';
import { RightsUsersController } from '../rights-user.controller';

describe('RightsController', () => {
  let controller: RightsUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightsUsersController],
    }).compile();

    controller = module.get<RightsUsersController>(RightsUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
