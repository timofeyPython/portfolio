<template>
  <div class="works">
    <div class="imgs">
      <ul>
        <li v-for="entry in data" :key="entry.id">
          <my-img
            :src="entry.img"
            :alt="''"
            :showing="true"
            :api="API_IMAGES_WORKS"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWorks } from "@/utils/api";
import { API_IMAGES_WORKS } from "@/utils/constants";
import { onMounted, ref } from "vue";

const data = ref<Array<{ id: number; img: string; sort: number }>>([]);

onMounted(async () => {
  data.value = await getWorks();
});
</script>

<style lang="scss" scoped src="../styles/images.scss"></style>
