import { createRouter, createWebHistory } from "vue-router";
import routes from "@routers/routes";

const router = createRouter({
  history: createWebHistory("shop"),
  routes,
});

export default router;
