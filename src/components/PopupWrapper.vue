<template>
  <Teleport to="#popup">
    <div v-if="show" class="popup-wrapper" @click.self="emits('close')">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue';

const emits = defineEmits(['close']);

const show = inject('showModal');
</script>

<style lang="scss" scoped>
.popup-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
}
</style>
