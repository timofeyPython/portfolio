<template>
  <div class="header">
    <div class="info">
      <div class="element">
        <button type="button" class="btn btn-outline-dark">
          Позвонить мне
        </button>
      </div>

      <div class="brand" @click="$router.push('/')">
        <hr />
        <div class="label">
          <h1 class="display-6" style="margin-bottom: -15px">MY MIRROR</h1>
          <span style="font-size: 14px" class="fst-italic"
            >Гримерные зеркала на заказ</span
          >
        </div>
      </div>

      <div class="messages">
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>+7-920-905-90-77</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            пн-пт с 9:00 до 18:00
          </figcaption>
        </figure>
        <social-media></social-media>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialMedia from "@UI/templates/SocialMedia.vue";

defineOptions({
  name: "header-d",
});
</script>

<style lang="scss" src="./styles/header.scss" scoped></style>
