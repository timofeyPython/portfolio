<template>
  <div for="" style="margin: 0; padding: 0">
    <b-icon-house style="margin-bottom: 3px" /> {{ title }} -
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "navigation",
});
defineProps<{
  title: string;
  name: string;
}>();
</script>
