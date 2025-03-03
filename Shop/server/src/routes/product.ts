/* eslint-disable @typescript-eslint/no-explicit-any */
import Products from "@controllers/Products";
import { uploadFiles } from "@utils/index";
import authMiddleware from "@middleware/authMiddleware";
import { Router } from "express";
import roleMiddleware from "@/middleware/roleMiddleware";

const router = new (Router as any)();
const products = new Products();

router.post(
  "/",
  roleMiddleware("ADMIN"),
  uploadFiles("images", "products", true),
  products.create.bind(products)
);
router.put(
  "/",
  roleMiddleware("ADMIN"),
  uploadFiles("images", "products", true),
  products.update.bind(products)
);
router.delete("/", authMiddleware, products.delete.bind(products));
router.get("/", products.getAll.bind(products));
router.get("/:id", products.getOne.bind(products));

export default router;
