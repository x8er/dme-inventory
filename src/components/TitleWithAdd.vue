<template>
  <div class="title-with-add">
    <slot></slot>
    <button @click="emits('click')">
      <PlusSVG />
    </button>
  </div>
</template>

<script setup>
import PlusSVG from '@/assets/icons/plus.svg';

const emits = defineEmits(['click']);
</script>

<style lang="scss" scoped>
.title-with-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.375rem;
  color: #2d5a81;
  width: 100%;

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #05a3ad;
    border: 0;
    width: 30px;
    height: 30px;
  }
}
</style>
