<template>
  <div class="notFound">
    <h1 class="display-6 title">Данная страница не найдена</h1>
    <hr />
    <div>
      <div class="emtpy">
        <p>Данной страницы не существует!</p>
      </div>
      <div style="margin-top: 5%">
        <a href="/">
          <button class="btn btn-outline-dark">Вернуться в магазин</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.notFound {
  padding: 2% 15% 5% 15%;
}
</style>
