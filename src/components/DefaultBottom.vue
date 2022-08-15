<template>
  <button :class="{ coloured: props.coloured }">
    <component :is="iconComponent" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { getSvgIcon } from '@/utils/getSvgIcon';

const props = defineProps({ coloured: Boolean, iconName: String });

const iconComponent = computed(
  () => props.iconName && defineAsyncComponent(() => getSvgIcon(props.iconName))
);
</script>

<script></script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  padding: 8px 10px;
  border: 1px solid #8c99af;
  border-radius: 2px;
  background-color: transparent;

  &.coloured {
    background-color: #05a3ad;
    border: 0;

    span {
      color: white;
    }

    svg {
      fill: white;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #8c99af;
  }

  span {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 143%;
    color: #8c99af;
  }
}
</style>
