<template>
  <div class="container_plus">
    <nav-bar />
    <div class="views">
      <router-view> </router-view>
    </div>
    <footer-d></footer-d>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@components/UI/shared/Navbar.vue";
import FooterD from "@components/UI/shared/FooterD.vue";
</script>
<style lang="scss" src="./style.scss"></style>
