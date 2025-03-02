import { Router } from "express";
import Types from "@/controllers/Types";
import roleMiddleware from "@/middleware/roleMiddleware";
import authMiddleware from "@/middleware/authMiddleware";
import { ERoutesType } from "@/types/routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router = new (Router as any)();
const types = new Types();

router.post(
  `/${ERoutesType.categories}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.createCategory.bind(types)
);
router.post(
  `/${ERoutesType.light}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.createTypeLight.bind(types)
);
router.post(
  `/${ERoutesType.colortemps}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.createTypeColorTemp.bind(types)
);
router.post(
  `/${ERoutesType.materials}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.createTypeMaterial.bind(types)
);
router.post(
  `/${ERoutesType.colorframes}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.createColorFrame.bind(types)
);

router.put(
  `/${ERoutesType.categories}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.updateTypeCategory.bind(types)
);
router.put(
  `/${ERoutesType.light}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.updateTypeLight.bind(types)
);
router.put(
  `/${ERoutesType.colortemps}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.updateTypeColorTemp.bind(types)
);
router.put(
  `/${ERoutesType.materials}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.updateTypeMaterial.bind(types)
);
router.put(
  `/${ERoutesType.colorframes}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.updateColorFrame.bind(types)
);

router.delete(
  `/${ERoutesType.categories}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.deleteTypeCategory.bind(types)
);
router.delete(
  `/${ERoutesType.light}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.deleteTypeLight.bind(types)
);
router.delete(
  `/${ERoutesType.colortemps}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.deleteTypeColorTemp.bind(types)
);
router.delete(
  `/${ERoutesType.materials}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.deleteTypeMaterial.bind(types)
);
router.delete(
  `/${ERoutesType.colorframes}`,
  authMiddleware,
  roleMiddleware("ADMIN"),
  types.deleteColorFrame.bind(types)
);

router.get(`/${ERoutesType.categories}`, types.getCategory.bind(types));
router.get(`/${ERoutesType.light}`, types.getTypeLight.bind(types));
router.get(`/${ERoutesType.colortemps}`, types.getTypeColorTemp.bind(types));
router.get(`/${ERoutesType.materials}`, types.getTypeMaterial.bind(types));
router.get(`/${ERoutesType.colorframes}`, types.getColorFrame.bind(types));

export default router;
