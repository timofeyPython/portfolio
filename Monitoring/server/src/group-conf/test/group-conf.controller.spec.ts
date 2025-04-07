import { Test, TestingModule } from "@nestjs/testing";
import { GroupConfController } from "../group-conf.controller";

describe("GroupConfController", () => {
  let controller: GroupConfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupConfController],
    }).compile();

    controller = module.get<GroupConfController>(GroupConfController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
