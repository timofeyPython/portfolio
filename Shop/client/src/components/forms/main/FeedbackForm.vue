<template>
  <div v-if="!complate">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        ><slot name="label1">Ваше имя</slot></label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="value"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput2" class="form-label"
        ><slot name="label2">Ваш телефон</slot></label
      >
      <input
        type="number"
        class="form-control"
        id="exampleFormControlInput2"
        v-model="value2"
      />
    </div>
    <div style="text-align: end">
      <button class="btn btn-outline-dark" @click="actionFeedback">
        Отправить
      </button>
    </div>
  </div>
  <div v-else>
    <p class="lead">Спасибо ! В ближайшее время с вами свяжется специалист</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["close"]);
const value = ref("");
const value2 = ref("");
const complate = ref(false);

const actionFeedback = () => {
  if (value.value && value2.value) {
    complate.value = true;
    setTimeout(() => emits("close"), 2000);
  } else {
    alert("Введите телефон и ваше имя!");
  }
};
</script>

<style scoped></style>
