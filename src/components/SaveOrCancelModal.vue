<template>
  <DefaultTemplate @close="emits('close')">
    <template #title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template #bottom>
      <DefaultBottom class="custom-button-style cancel" @click="emits('close')">
        Cancel
      </DefaultBottom>
      <DefaultBottom class="custom-button-style" green>
        <template #icon>
          <SaveSVG />
        </template>
        Save
      </DefaultBottom>
    </template>
  </DefaultTemplate>
</template>

<script setup>
import { provide } from 'vue';
import DefaultTemplate from '@/components/DefaultModal.vue';
import DefaultBottom from '@/components/DefaultBottom.vue';
import SaveSVG from '@/assets/icons/save.svg';

const props = defineProps({ show: Boolean });
const emits = defineEmits(['close']);

provide('showModal', props.show);
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
