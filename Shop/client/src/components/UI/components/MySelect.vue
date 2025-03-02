<template>
  <select
    :id="id"
    :value="modelValue"
    @change="
      $emit('update:modelValue', +($event.target as HTMLInputElement).value)
    "
  >
    <option disabled value=""><slot></slot></option>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { IOption } from "@/types/general";
defineOptions({
  name: "my-select",
});
defineProps<{
  modelValue: string;
  options: Array<IOption>;
  id?: string;
}>();
defineEmits(["update:modelValue"]);
</script>
<style lang="scss" scoped>
select {
  width: 100%;
  height: 100%;
  padding-left: 5px;
}
</style>
