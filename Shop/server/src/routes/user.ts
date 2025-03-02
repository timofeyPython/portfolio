import User from "@/controllers/User";
import authMiddleware from "@/middleware/authMiddleware";
import roleMiddleware from "@/middleware/roleMiddleware";
import { ERoutesUser } from "@/types/routes";
import { Router } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new (Router as any)();
const user = new User();
router.post(
  `/${ERoutesUser.reg}`,
  roleMiddleware("ADMIN"),
  user.registration.bind(user)
);
router.post(`/${ERoutesUser.login}`, user.login.bind(user));
router.get(`/${ERoutesUser.check}`, authMiddleware, user.check.bind(user));

export default router;
