<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(_, index) in images ? images : []"
        :key="index"
        type="button"
        data-bs-target="#carouselExampleDark"
        :data-bs-slide-to="index"
        :aria-label="`Slide ${index + 1}`"
        :class="{
          active: index === 0 ? `active` : ``,
        }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images ? images : []"
        :key="index"
        class="carousel-item"
        :class="{
          active: index === 0 ? `active` : ``,
        }"
        :data-bs-interval="index === 0 ? 10000 : 2000"
      >
        <my-img :src="`${image}`" class="d-block w-100" :alt="image" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div v-if="!extraDisable && Array.isArray(images) && images.length > 1">
    <div style="text-align: center">
      <my-img
        v-for="image in [...images].filter((_, i) => i != 0)"
        :src="image"
        :showing="true"
        alt="product"
        style="width: 30%; padding: 15px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "my-slider",
});
defineProps<{
  images: Array<string>;
  extraDisable?: boolean;
}>();
</script>

<style scoped></style>
