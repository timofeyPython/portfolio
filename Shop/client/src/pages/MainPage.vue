<template>
  <div class="main">
    <div class="catalog">
      <div>
        <div class="container" :style="store.dVesrion ? 'display: flex;' : ''">
          <filter-form
            @updateList="
              () =>
                changePage(store.page, {
                  lightId: store.getSelectLightIds,
                  colorTempId: store.getSelectColorTempIds,
                  materialId: store.getSelectMaterialIds,
                  categoryId: store.getSelectCategoriesIds,
                  price: store.getPrice,
                })
            "
          />
          <div v-if="cards.length > 0">
            <div class="contents" style="min-height: 75vh">
              <div class="row row-cols-1 row-cols-md-4 g-4">
                <transition-group name="list">
                  <div class="col-sm-3" v-for="card in cards" :key="card.id">
                    <card-list
                      :id="card.id"
                      :price="card.price"
                      :name="card.name"
                      :src="card.images.result?.[0]"
                    />
                  </div>
                </transition-group>
              </div>
            </div>
            <pagination-cards
              :page="store.page"
              :totalPage="store.countsPage"
              :changePage="changePage"
            />
          </div>
          <div v-else>По выбранным фильтрам нет подходящих зеркал</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/useStore";
import PaginationCards from "@/components/forms/card/Pagination.vue";
import CardList from "@/components/forms/card/Card.vue";
import { onMounted, ref, type Ref } from "vue";
import type { IProduct } from "@/types/general";
import { getProducts } from "@/utils/api";
import FilterForm from "@components/forms/main/FilterForm.vue";

const store = useStore();
const cards: Ref<Array<IProduct>> = ref([]);

async function changePage(page: number, params?: any) {
  const data = await getProducts(page, params);
  cards.value = data.entries;
  store.setPage(page);
  store.setCountsPage(Math.ceil(data.count / 8));
}

onMounted(async () => await changePage(store.page));
</script>

<style scoped src="../styles/main.scss"></style>
