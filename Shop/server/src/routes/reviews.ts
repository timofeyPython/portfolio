/* eslint-disable @typescript-eslint/no-explicit-any */
import Images from "@/controllers/Images";
import { Router } from "express";
import { uploadFiles } from "@/libs/utils";
import { models } from "@/libs/database/models";
import { ERouters } from "@/types/routes";
import { folderImageReviews } from "@/libs/utils/constants";
import roleMiddleware from "@middleware/roleMiddleware";

const router = new (Router as any)();
const works = new Images({
  router: ERouters.reviews,
  type: "Отзывы",
  model: models.Reviews,
  pathFolder: folderImageReviews,
});

router.get("/", works.getAll.bind(works));
router.post(
  "/",
  roleMiddleware("ADMIN"),
  uploadFiles("images", "reviews", true),
  works.create.bind(works)
);
router.put("/", uploadFiles("images", "reviews"), works.update.bind(works));
router.delete("/:id", works.delete.bind(works));

export default router;
