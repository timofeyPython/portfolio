<template>
  <div class="product">
    <div class="card w-100">
      <div class="row g-0">
        <div class="col-md-5">
          <MySlider :images="entry?.images.result ? entry.images.result : []" />
          <div style="padding: 5%">
            <h1 class="display-6 title">Описание</h1>
            <hr />
            <p>{{ entry?.description }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h1 class="display-6">{{ entry?.name }}</h1>
            <hr />
            <h1 class="display-6 title">Технические Характеристики</h1>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="td-special" colspan="2">
                    Конструктивные особенности
                  </td>
                </tr>
                <tr v-for="row in rowsTable">
                  <td>
                    {{ row.title }}
                  </td>
                  <td>
                    {{ row.name }}
                  </td>
                </tr>
                <tr>
                  <td class="td-special" colspan="2">Изменяемые параметры</td>
                </tr>
                <tr>
                  <td>Ширина, мм</td>
                  <td>
                    <input
                      v-model="productWidth"
                      class="form-control input-form"
                      id="width"
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Высота, мм</td>
                  <td>
                    <input
                      v-model="productHeight"
                      class="form-control input-form"
                      id="height"
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Цветовая температура</td>
                  <td>
                    <my-select
                      v-model="colorTempId"
                      :id="'colorTempId'"
                      :options="colorTemperatures"
                      class="form-select select-form"
                      >Выбери темп.</my-select
                    >
                  </td>
                </tr>
                <tr v-if="entry?.types?.material.name != 'Без рамы'">
                  <td>Цвет рамы</td>
                  <td>
                    <my-select
                      v-model="colorFrameId"
                      :options="colorFrames"
                      :id="'materialId'"
                      class="form-select select-form"
                      >Выбери цвет</my-select
                    >
                  </td>
                </tr>
                <tr>
                  <td>Антизапотевание</td>
                  <td>
                    <div class="form-check">
                      <input
                        v-model="antiFogging"
                        @change="addFogginPrice"
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <span class="form-check-label"></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style="display: flex; justify-content: space-between">
              <div>
                <h1 class="display-6 title">Итоговая цена: {{ price }}</h1>
                <p
                  v-if="
                    productWidth != entry?.width ||
                    productHeight != entry?.height
                  "
                >
                  Вы выбрали не стандартные размеры товара, точная цена будет
                  подсчитана после оформления заказа!
                </p>
              </div>
              <div>
                <button
                  class="btn btn-outline-dark"
                  @click="addBasket"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <offCanvas :basket="store.basket" />
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
import OffCanvas from "@/components/UI/templates/OffCanvas.vue";
import type { IOption, IProduct } from "@/types/general";
import MySlider from "@/components/UI/components/MySlider.vue";
import { getColorFrames, getColortemps, getProduct } from "@/utils/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const entry = ref<IProduct | null>(null);
const store = useStore();
// обязательные параметры
const productWidth = ref(0);
const productHeight = ref(0);
const colorTempId = ref("");
const colorFrameId = ref("");
const colorFrames = ref<Array<IOption>>([]);
const colorTemperatures = ref<Array<IOption>>([]);
const antiFogging = ref(false);
const rowsTable = ref<
  Array<{
    title: string;
    name: string;
  }>
>([]);
const price = ref(0);

const addFogginPrice = () => {
  if (antiFogging.value) price.value = (price.value / 100) * 30 + price.value;
  else price.value = +`${entry.value?.price}`;
};

const setRowsTable = (entry: IProduct) => {
  const result = [
    {
      title: "Тип рамы",
      name: entry?.types?.category?.name,
    },
    {
      title: "Тип подсветки:",
      name: entry?.types?.lighting?.name,
    },
    {
      title: "Расположение подсветки",
      name: entry?.locationLighting,
    },
    {
      title: "Колличество лампочек",
      name: `${entry?.numberLight} шт.`,
    },
    {
      title: "Тип крепления",
      name: `${entry?.typeFixation} мм.`,
    },
    {
      title: "Толщина зеркального полотна",
      name: `${entry?.depthMirror} мм.`,
    },
    {
      title: "Общая толщина изделия",
      name: `${entry?.generalDepthProduction} мм.`,
    },
  ];

  if (entry?.types?.material?.name != "Без рамы") {
    result.push({
      title: "Ширина рамы",
      name: `${entry?.widthFrame} мм.`,
    });
  }
  return result;
};

const getOptions = async () => {
  const temps = await getColortemps();
  const frames = await getColorFrames();
  return {
    temps,
    frames,
  };
};

const addBasket = () => {
  if (entry.value) {
    const {
      id,
      name,
      locationLighting,
      depthMirror,
      generalDepthProduction,
      widthFrame,
      typeFixation,
      numberLight,
      images,
      types,
    } = entry.value;
    const changeTypes =
      productHeight.value != entry.value?.width ||
      productHeight.value != entry.value?.height;
    const order = {
      bid: Number(new Date().getMilliseconds() / 1000),
      id,
      name,
      price: price.value,
      locationLighting,
      depthMirror,
      generalDepthProduction,
      widthFrame,
      typeFixation,
      numberLight,
      width: productWidth.value,
      height: productHeight.value,
      types: {
        frame: {
          id: colorFrameId.value,
          name: types.frame.name,
        },
        category: {
          id: types.category.id,
          name: types.category.name,
        },
        lighting: {
          id: types.lighting.id,
          name: types.lighting.name,
        },
        colorTemperature: {
          id: colorTempId.value,
          name: types.colorTemperature.name,
        },
        material: {
          id: types.material.id,
          name: types.material.name,
        },

        antiFogging: antiFogging.value,
      },
      changeTypes,
      images: images.result,
    };
    store.addBasket(order);
  }
};

onMounted(async () => {
  const id = useRoute().params.id;
  if (!Array.isArray(id)) {
    entry.value = (await getProduct(id)).entry;
    colorFrameId.value = entry.value.types.frame.id;
    colorTempId.value = entry.value.types.colorTemperature.id;
    productWidth.value = entry.value.width;
    productHeight.value = entry.value.height;
    price.value = entry.value.price;
    rowsTable.value = setRowsTable(entry.value);
  }
  const arrOptions = await getOptions();
  colorFrames.value = arrOptions.frames;
  colorTemperatures.value = arrOptions.temps;
});
</script>

<style scoped lang="scss" src="../styles/product.scss"></style>
