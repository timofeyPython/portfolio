<template>
  <div class="filter" :style="store.dVesrion ? '' : 'max-width:100%'">
    <div class="block">
      <div class="title">Цена</div>
      <div class="content price">
        <input
          type="number"
          id="price1"
          :min="0"
          style="margin-right: 20px"
          v-model="price[0]"
        />
        <input type="number" id="price2" v-model="price[1]" />
      </div>
    </div>
    <filter-block
      :array="categories"
      :ids="store.getSelectCategoriesIds"
      :title="'Категории'"
      @change="store.setCategoriesIds"
    />
    <filter-block
      :array="lightings"
      :ids="store.getSelectLightIds"
      :title="'Тип освещения'"
      @change="store.setLightIds"
    />
    <filter-block
      :array="colorTemperatures"
      :ids="store.getSelectColorTempIds"
      :title="'Цветовая температура'"
      @change="store.setColorTempsIds"
    />
    <filter-block
      :array="materials"
      :ids="store.getSelectMaterialIds"
      :title="'Материал'"
      @change="store.setMaterialsIds"
    />
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
import type { IOption } from "@/types/general";
import {
  getCategories,
  getColortemps,
  getLight,
  getMaterials,
} from "@/utils/api";
import { onMounted, onUpdated, ref } from "vue";
import FilterBlock from "./FilterBlock.vue";

const emits = defineEmits(["updateList"]);
const store = useStore();
const price = ref(store.priceRange);
const lightings = ref<Array<IOption>>([]);
const colorTemperatures = ref<Array<IOption>>([]);
const materials = ref<Array<IOption>>([]);
const categories = ref<Array<IOption>>([]);
const getOptions = async () => {
  const temps = await getColortemps();
  const material = await getMaterials();
  const ligh = await getLight();
  const categories = await getCategories();
  return {
    temps,
    material,
    ligh,
    categories,
  };
};

onMounted(async () => {
  const option = await getOptions();
  lightings.value = option.ligh;
  colorTemperatures.value = option.temps;
  materials.value = option.material;
  categories.value = option.categories;
});
onUpdated(() => {
  store.categoriesIds;
  emits("updateList");
});
</script>

<style src="./style.scss"></style>
