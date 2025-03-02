<template>
  <div class="card" @click="$router.push(`/product/${id}`)">
    <div class="img">
      <my-img :src="src" alt="product" />
    </div>
    <div class="card-body">
      <p>{{ name }}</p>
      <p class="price">
        от <strong>{{ price }} ₽</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "card-list",
});
defineProps<{
  src: string;
  name: string;
  price: number;
  id: string;
}>();
</script>
<style lang="scss" src="./card.scss" scoped></style>
