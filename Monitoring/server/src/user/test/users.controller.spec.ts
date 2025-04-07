import { beforeEach } from "node:test";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";
import { Users } from "../user.model";

describe("UserController", () => {
  let usersController: UserController;
  let usersService: UserService;
  usersService = new UserService(Users);
  usersController = new UserController(usersService);
  beforeEach(() => {
    usersService = new UserService(Users);
    usersController = new UserController(usersService);
  });

  describe("findAll", () => {
    it("users array", async () => {
      // const result = [];
      // jest.spyOn(usersService, "test").mockImplementation(() => result);
      // expect(await usersController.test()).toEqual(["test"]);
    });
  });
});
