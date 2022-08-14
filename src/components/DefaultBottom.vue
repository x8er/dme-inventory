<template>
  <button :class="{ green: props.green }">
    <slot name="icon"></slot>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
const props = defineProps({ green: Boolean });
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #8c99af;
  border-radius: 2px;
  background-color: transparent;

  &.green {
    background-color: #05a3ad;
    border: 0;

    span {
      color: white;
    }

    svg * {
      fill: white;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;

    * {
      fill: #8c99af;
    }
  }

  span {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 143%;
    color: #8c99af;
  }
}
</style>
