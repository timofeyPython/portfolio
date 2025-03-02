import { Router } from "express";
import { ERouters } from "@types_/routes";
import user from "@routes/user";
import product from "@routes/product";
import types from "@/routes/types";
import order from "@/routes/order";
import works from "@/routes/works";
import reviews from "@/routes/reviews";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new (Router as any)();
router.get("/", (req, res) =>
  res.json({ message: "Hello, I AM REST_API_V1_0" })
);
router.use(`/${ERouters.users}`, user);
router.use(`/${ERouters.products}`, product);
router.use(`/${ERouters.types}`, types);
router.use(`/${ERouters.orders}`, order);
router.use(`/${ERouters.works}`, works);
router.use(`/${ERouters.reviews}`, reviews);

export default router;
