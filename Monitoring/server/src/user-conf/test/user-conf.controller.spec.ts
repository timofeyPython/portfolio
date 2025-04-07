import { Test, TestingModule } from '@nestjs/testing';
import { UserConfController } from '../user-conf.controller';

describe('UserConfController', () => {
  let controller: UserConfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserConfController],
    }).compile();

    controller = module.get<UserConfController>(UserConfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
