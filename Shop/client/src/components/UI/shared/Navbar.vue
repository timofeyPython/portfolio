<template>
  <div>
    <header-d v-if="store.dVesrion" />
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="page in menu" :key="page.name">
              <a
                class="nav-link"
                @click="$router.push(page.link)"
                :class="{
                  active: $route.path === page.link ? `active` : ``,
                }"
              >
                {{ page.name }}
              </a>
            </li>
          </ul>
          <div class="personalAccount">
            <div>
              <div @click="$router.push('/basket')" style="cursor: pointer">
                <span
                  class="badge bg-dark rounded-pill"
                  style="position: absolute; margin-left: 115px"
                  >{{ store.getBasketCount }}</span
                >
                <img :src="basket" />
              </div>
            </div>
            <div v-if="isAuth">
              <div>
                <img :src="admin" @click="$router.push('/admin')" />
              </div>
            </div>
          </div>
        </div>
        <!-- <div
        class="navbar-toggler"
        style="color: white; border: none; width: 55%"
      >
        <div style="font-size: 15px">
          <a
            href="/"
            style="
              cursor: pointer;
              display: flex;
              text-decoration: none;
              color: #ffd517;
            "
          >
            <div><lamp-logo /></div>
            <div style="margin: 5px 0px 5px 5px">
              MyMirror33<br /><small>Зеркала на заказ</small>
            </div>
          </a>
        </div>
      </div> -->
        <!-- <div class="navbar-toggler" style="border: none">
        <div @click="$router.push('/basket')" style="cursor: pointer">
          <div v-if="basketCount > 0">
            <div class="circle"></div>
            <div class="basketCount" v-if="basketCount < 10">
              {{ basketCount }}
            </div>
            <div class="basketCount" v-else style="margin-left: 33px">
              {{ basketCount }}
            </div>
          </div>
          <img :src="basket" style="width: 70%; height: 70%" />
        </div>
      </div> -->
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import HeaderD from "./HeaderD.vue";
import basket from "@assets/icon/basket.png";
import admin from "@assets/icon/admin.png";
import { onMounted, ref, type Ref } from "vue";
import { getCategories } from "@/utils/api";
import type { IOption } from "@/types/general";
import useStore from "@/store/useStore";
import { storeToRefs } from "pinia";

defineOptions({
  name: "nav-bar",
});

const store = useStore();
const { isAuth } = storeToRefs(store);
const menu = [
  { name: "Каталог", link: "/" },
  { name: "Наши работы", link: "/works" },
  { name: "Отзывы", link: "/reviews" },
  { name: "Оплата, доставка, монтаж", link: "/deliveryPay" },
  { name: "Контакты", link: "/contacts" },
];
const categories: Ref<Array<IOption>> = ref([]);

function eventDListenerDVesrion() {
  if (document.documentElement.clientWidth > 767) store.setDVerison(true);
  else store.setDVerison(false);

  addEventListener("resize", function () {
    if (this.window.innerWidth > 767) store.setDVerison(true);
    else store.setDVerison(false);
  });
}

onMounted(async () => {
  categories.value = await getCategories();
  eventDListenerDVesrion();
});
</script>
<style lang="scss" src="./styles/navbar.scss" scoped></style>
