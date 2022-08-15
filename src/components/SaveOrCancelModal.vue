<template>
  <DefaultModal @close="emits('close')">
    <template #title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template #bottom>
      <DefaultBottom
        class="custom-button-style cancel"
        @click="emits('cancel')"
      >
        Cancel
      </DefaultBottom>
      <DefaultBottom
        class="custom-button-style"
        coloured
        icon-name="save"
        @click="emits('save')"
      >
        Save
      </DefaultBottom>
    </template>
  </DefaultModal>
</template>

<script setup>
import { provide, toRef } from 'vue';
import DefaultModal from '@/components/DefaultModal.vue';
import DefaultBottom from '@/components/DefaultBottom.vue';

const props = defineProps({ show: Boolean });
const emits = defineEmits(['close', 'cancel', 'save']);

provide('showModal', toRef(props, 'show'));
</script>

<style lang="scss" scoped>
.custom-button-style {
  height: 40px;
  width: 100px;

  &.cancel {
    margin-right: 10px;
    width: 76px;
  }
}
</style>
