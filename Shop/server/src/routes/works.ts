/* eslint-disable @typescript-eslint/no-explicit-any */
import Images from "@controllers/Images";
import { Router } from "express";
import { uploadFiles } from "@utils/index";
import { models } from "@db/models";
import { ERouters } from "@types_/routes";
import { folderImagesWorks } from "@utils/constants";

const router = new (Router as any)();
const works = new Images({
  router: ERouters.works,
  type: "Работы",
  model: models.Works,
  pathFolder: folderImagesWorks,
});

router.get("/", works.getAll.bind(works));
router.post(
  "/",
  uploadFiles("images", "works", true),
  works.create.bind(works)
);
router.put("/", uploadFiles("images", "works"), works.update.bind(works));
router.delete("/:id", works.delete.bind(works));

export default router;
