import { Test, TestingModule } from "@nestjs/testing";
import { RightsGroupController } from "../rights-group.controller";

describe("RightsController", () => {
  let controller: RightsGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightsGroupController],
    }).compile();

    controller = module.get<RightsGroupController>(RightsGroupController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
