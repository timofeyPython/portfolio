import { Test, TestingModule } from "@nestjs/testing";
import { RightsGroupsService } from "../rights-group.service";

describe("RightsService", () => {
  let service: RightsGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RightsGroupsService],
    }).compile();

    service = module.get<RightsGroupsService>(RightsGroupsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
