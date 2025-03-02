<template>
  <div class="block">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div v-for="element in array" :key="element.id">
        <div class="form-check">
          <input
            class="form-check-input position-static"
            type="checkbox"
            :id="element.id"
            :checked="ids.includes(element.id)"
            @change="change"
          />
          <label :for="element.id">{{ element.name }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "filter-block",
});
const emits = defineEmits(["change"]);
defineProps<{
  array: Array<{ id: string; name: string }>;
  ids: Array<string>;
  title: string;
}>();

function change(event: Event) {
  const target = event.target as HTMLInputElement;
  emits("change", target.id, target.checked);
}
</script>

<style scoped lang="scss">
.block {
  max-width: 500px;
}

.title {
  border-bottom: 1px solid #dadada;
  padding: 10px;
  background-color: #80808054;
  cursor: default;
}

.content {
  padding: 10px;
}

.content.price {
  display: flex;
  justify-content: space-between;
  input {
    width: 100%;
    padding: 3px;
    color: gray;
    border: 1px solid gray;
  }
}
</style>
