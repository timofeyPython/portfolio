<template>
  <div class="basket">
    <h1 style="margin-bottom: 25px">Корзина</h1>
    <hr />

    <div v-if="store.basket.length > 0">
      <div class="card mb-3" v-for="entry in store.basket" :key="entry.bid">
        <div class="row g-0">
          <div class="col-md-4 basketImg">
            <my-img
              :src="entry.images?.[0]"
              class="img-fluid rounded-start"
              alt="product"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ entry.name }}</h5>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Цена</td>
                    <td>{{ entry.price }} ₽</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{{ entry.types.frame.name }}</td>
                  </tr>
                  <tr>
                    <td>Ширина</td>
                    <td>{{ entry.width }} мм.</td>
                  </tr>
                  <tr>
                    <td>Высота</td>
                    <td>{{ entry.height }} мм.</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align: center; border: none">
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="store.deleteProductBasket(entry)"
                      >
                        <b-icon-basket-fill></b-icon-basket-fill>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        style="display: flex; justify-content: space-between; margin-top: 25px"
      >
        <div>
          Сумма заказа:
          {{ store.getBasketSum }} ₽
        </div>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$router.push('/order')"
        >
          Оформить заказ
        </button>
      </div>
    </div>

    <div v-else>
      <div>
        <div class="emtpy">
          <div style="padding: 5px; display: flex">
            <div class="h4 mb-1" style="color: rgb(175, 9, 9)">
              <b-icon-basket3-fill />
            </div>
            <div style="margin-left: 15px; margin-top: 2px">
              Корзина пуста вы не добавили не одного товара!
            </div>
          </div>
        </div>
        <div style="margin-top: 25px">
          <a href="/">
            <button class="btn btn-outline-dark">Вернуться в магазин</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
const store = useStore();
</script>

<style scoped lang="scss" src="../styles/basket.scss"></style>
