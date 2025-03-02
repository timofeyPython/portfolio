import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import router from "@routers/router";
import { createPinia } from "pinia";
import componentsUI from "@components/UI/components/index";

const app = createApp(App);
const pinia = createPinia();
componentsUI.forEach((component) =>
  component && component.name ? app.component(component.name, component) : ""
);
app
  .use(BootstrapIconsPlugin)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
  .use(pinia)
  .mount("#app");
