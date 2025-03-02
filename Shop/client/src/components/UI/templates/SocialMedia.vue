<template>
  <div class="socWeb">
    <a
      v-for="{ href, target, src, alt, style } in social"
      :href="href"
      :target="target"
    >
      <img :src="src" :alt="alt" :style="style" />
    </a>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "social-media",
});

import inst from "@assets/imgs/it.png";
import tg from "@assets/imgs/tg.png";
import vk from "@assets/imgs/vk.png";
import wp from "@assets/imgs/wp.png";

const social = [
  {
    href: "",
    target: "_blank",
    alt: "telegram",
    style: "",
    src: tg,
  },
  {
    href: "",
    target: "_blank",
    alt: "vk",
    style: "",
    src: vk,
  },
  {
    href: "",
    target: "_blank",
    alt: "Instagramm",
    style: "",
    src: inst,
  },
  {
    href: "",
    target: "_blank",
    alt: "watsapp",
    style: "",
    src: wp,
  },
];
</script>

<style scoped>
.socWeb {
  display: flex;
}
.socWeb img {
  cursor: pointer;
  width: 30px;
  margin: 0px 10px 0 10px;
}
</style>
