<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    style="max-width: 100%"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Корзина</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Закрыть"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <div v-if="basket.length > 0">
          <div v-for="entry in basket" :key="entry.id">
            <div class="row g-0">
              <div class="col-md-3">
                <div>
                  <div>
                    <my-img
                      :src="`${entry.images?.[0]}`"
                      class="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div
                    style="
                      cursor: pointer;
                      color: rgb(175, 9, 9);
                      text-align: center;
                      font-size: 23px;
                    "
                    @click="store.deleteProductBasket(entry)"
                  >
                    <b-icon-basket3-fill />
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h6 class="card-title">
                    <i>{{ entry.name }}</i>
                  </h6>
                  <div>Высота: {{ entry.height }} мм</div>
                  <div>Ширина: {{ entry.width }} мм</div>
                  <div>Цвет: {{ entry.types?.frame?.name }}</div>
                  <div>
                    Стоимость товара:
                    <strong style="font-weight: 600">{{ entry.price }}</strong>
                    р.
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div v-else style="padding: 3%">
          <span>Товаров в корзине нет</span>
        </div>
      </div>
      <div class="dropdown mt-3">
        <button
          class="btn btn-outline-dark"
          style="width: 100%"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="$router.push(`/basket/`)"
        >
          В корзину
        </button>
        <button
          class="btn btn-outline-dark"
          style="width: 100%; margin-top: 10px"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          type="button"
          @click="$router.push('/order')"
        >
          Оформить
        </button>
        <button
          class="btn btn-outline-dark"
          style="width: 100%; margin-top: 10px"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="$router.push(`/`)"
        >
          Продолжить покупки
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
import type { IOrder } from "@/types/general";

const store = useStore();

defineOptions({
  name: "off-canvas",
});

defineProps<{
  basket: Array<IOrder>;
}>();
</script>

<style scoped>
.card-body {
  margin-left: 15px;
}
</style>
