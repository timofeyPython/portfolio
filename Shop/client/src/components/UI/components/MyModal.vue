<template>
  <transition name="fade">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Обратная связь</slot>
            <div class="close" @click="$emit('show')">
                <b-icon-x-lg></b-icon-x-lg>
            </div>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineOptions({
  name: "my-modal",
});

defineProps<{
  show: boolean;
}>();

defineEmits(["show"]);
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  max-width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    display: flex;
    justify-content: space-between;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.close {
    cursor: pointer;
    
    transition: 2s;
    svg {
        width: 2em;
        height: 2em;
    }
}

.close:hover {
    transform: rotate(1turn);
}
</style>
