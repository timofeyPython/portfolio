<template>
  <div class="order">
    <h1 class="display-6 title">Оформление заказа</h1>
    <div class="forms" @submit.prevent="create" v-if="store.getBasketCount > 0">
      <hr />
      <form class="row g-3">
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">Имя</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="Введите ваше имя"
            v-model="name"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">Фамилия</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="Введите вашу фамилию"
            v-model="surname"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationTextarea" class="form-label">Ваш телефон</label>
          <input
            v-model="phone"
            class="form-control"
            id="validationTextarea"
            placeholder="Введите ваш номер телефона"
            type="number"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="exampleInputEmail1" class="form-label"
            >Адрес электронной почты</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите ваш email (необязательно)"
            v-model="email"
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="delivery"
              id="invalidCheck2"
            />
            <label class="form-check-label" for="invalidCheck2">
              Требуется доставка (От 590р по городу 27р - за 1 км, за город)
            </label>
          </div>
        </div>
        <div class="col-md-6" v-show="delivery">
          <label for="validationDefault03" class="form-label"
            >Адресс доставки</label
          >
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="validationDefault03"
            :required="delivery ? true : false"
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="montage"
              id="invalidCheck3"
            />
            <label class="form-check-label" for="invalidCheck3">
              🔨 Монтаж 20% от стоимости заказа (Но не менее 900р)
            </label>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputComments" class="form-label"
            >Коментарии к заказу</label
          >
          <textarea
            class="form"
            placeholder="Введите ваше сообщение"
            style="width: 100%; padding: 8px"
            id="exampleInputComments"
            v-model="comments"
          ></textarea>
        </div>
        <hr />
        <h5>Ваш заказ</h5>
        <div style="border: 1px solid gray; padding: 5%">
          <div class="row g-0" v-for="entry in store.basket" :key="entry.id">
            <div>
              <table class="table table-bordered" style="margin: 2% 1% 1% 1%">
                <tbody>
                  <tr>
                    <td colspan="2" class="td-special">Стандартные хар-ки</td>
                  </tr>
                  <tr>
                    <td>Наименование</td>
                    <td>{{ entry.name }}</td>
                  </tr>
                  <tr>
                    <td>Тип рамы</td>
                    <td>{{ entry.types.material?.name }}</td>
                  </tr>
                  <tr>
                    <td>Тип подсветки</td>
                    <td>{{ entry.types.lighting.name }}</td>
                  </tr>
                  <tr>
                    <td>Расположение подсветки</td>
                    <td>{{ entry.locationLighting }}</td>
                  </tr>
                  <tr>
                    <td>Колличество лампочек</td>
                    <td>{{ entry.numberLight }}</td>
                  </tr>
                  <tr>
                    <td>Тип крепления</td>
                    <td>{{ entry.typeFixation }}</td>
                  </tr>
                  <tr>
                    <td>Толщина зеркального полотна</td>
                    <td>{{ entry.depthMirror }} мм</td>
                  </tr>
                  <tr>
                    <td>Общая толщина изделия</td>
                    <td>{{ entry.generalDepthProduction }} мм</td>
                  </tr>
                  <tr v-if="entry?.types.material?.name != 'Без рамы'">
                    <td>Ширина рамы</td>
                    <td>{{ entry?.widthFrame }} мм</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="td-special">Изменяемые параметры</td>
                  </tr>
                  <tr>
                    <td>Ширина</td>
                    <td>{{ entry.width }} мм</td>
                  </tr>
                  <tr>
                    <td>Высота</td>
                    <td>{{ entry.height }} мм</td>
                  </tr>
                  <tr>
                    <td>Цветовая температура</td>
                    <td>{{ entry.types.colorTemperature?.name }}</td>
                  </tr>
                  <tr v-if="entry?.types.material?.name != 'Без рамы'">
                    <td>Цвет рамы</td>
                    <td>{{ entry.types.frame.name }}</td>
                  </tr>
                  <tr v-if="entry?.types?.antiFogging">
                    <td>Антизапотевание</td>
                    <td>Присутсвует</td>
                  </tr>
                  <tr>
                    <td>Цена</td>
                    <td>{{ entry.price }} ₽</td>
                  </tr>
                  <tr v-if="entry.changeTypes">
                    <td colspan="2" style="font-weight: 500">
                      Вы выбрали не стандартные размеры товара, точная цена
                      будет подсчитана после оформления заказа!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          class="mb-3"
          style="display: flex; justify-content: space-between; margin-top: 5%"
        >
          <div>
            <h1 class="display-6 title">
              Сумма заказа состовляет:
              {{ store.getBasketSum }} ₽
            </h1>
          </div>
          <div>
            <button
              class="btn btn-outline-dark"
              style="border-radius: 0px"
              type="submit"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-else-if="store.getBasketCount === 0 && !status">
      <div class="emtpy">
        <div style="padding: 5px; display: flex">
          <div class="h4 mb-1" style="color: rgb(175, 9, 9)">
            <b-icon-basket3-fill />
          </div>
          <div style="margin-left: 15px; margin-top: 2px">
            Не добавлено товаров в корзину
          </div>
        </div>
      </div>
      <div style="margin-top: 25px">
        <a href="/">
          <button class="btn btn-outline-dark">Вернуться в магазин</button>
        </a>
      </div>
    </div>
    <div v-if="status">
      <div class="emtpy">
        <div style="padding: 5px; display: flex">
          <div class="h4 mb-1" style="color: green">
            <b-icon-basket3-fill />
          </div>
          <div style="margin-left: 15px; margin-top: 2px">
            Заказ оформлен, спасибо, что выбрали нас !<br />
            В ближайшее время с вами свяжиться оператор для уточнения заказа<br />
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
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
import { createOrder } from "@/utils/api";
import { ref } from "vue";

const store = useStore();
const name = ref("");
const surname = ref("");
const phone = ref("");
const email = ref("");
const comments = ref("");
const address = ref("");
const delivery = ref(false);
const montage = ref(false);
const status = ref(false);

const create = async () => {
  const order = {
    products: store.basket,
    price: store.getBasketSum,
    name: name.value,
    surname: surname.value,
    phone: phone.value,
    email: email.value,
    address: address.value,
    montage: montage.value,
    delivery: delivery.value,
    comments: comments.value,
  };

  const res = await createOrder(order);
  if (res) {
    store.clearBasket();
    status.value = true;
  }
};
</script>

<style scoped lang="scss" src="../styles/order.scss"></style>
