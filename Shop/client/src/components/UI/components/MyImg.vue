<template>
  <img
    :src="`${api ? api : API_IMAGES_DEFAULT}${src}`"
    :alt="alt"
    :class="showing ? 'glightbox' : ''"
  />
</template>

<script setup lang="ts">
import { API_IMAGES_DEFAULT } from "@/utils/constants";
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from "glightbox";
import { getCurrentInstance, onMounted, onUpdated } from "vue";

defineOptions({
  name: "my-img",
});
const props = defineProps<{
  src: string;
  alt: string;
  showing?: boolean;
  api?: string;
}>();

if (props?.showing) {
  const app: any = getCurrentInstance();
  onMounted(() => (app.lightbox = GLightbox({ selector: ".glightbox" })));
  onUpdated(() => (app.lightbox = GLightbox({ selector: ".glightbox" })));
}
</script>
