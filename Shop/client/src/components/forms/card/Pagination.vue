<template>
  <div class="container">
    <div class="paginationBlock">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click="changePage(page - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="total in totalPage" :key="total">
            <a
              class="page-link"
              :class="{ active: total === page }"
              @click="changePage(total)"
              style="cursor: pointer"
              >{{ total }}</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click="changePage(page + 1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "pagination-cards",
});
defineProps<{
  page: number;
  totalPage: number;
  changePage: (val: number) => void;
}>();
</script>

<style src="./pagination.scss" scoped lang="scss"></style>
