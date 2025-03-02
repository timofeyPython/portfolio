import { Router } from "express";
import Orders from "@/controllers/Orders";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new (Router as any);
const orders  = new Orders();

router.post("/", orders.create.bind(orders));


export default router;