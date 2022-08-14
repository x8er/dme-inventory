<template>
  <PopupWrapper @close="emits('close')">
    <div class="default-modal">
      <div class="top">
        <span class="title">
          <slot name="title"></slot>
        </span>
      </div>
      <slot></slot>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </PopupWrapper>
</template>

<script setup>
import PopupWrapper from '@/components/PopupWrapper.vue';

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.default-modal {
  background-color: white;
  border: 1px solid #e1e1e1;
  border-radius: 4px;

  .top,
  .bottom {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
  }

  .top {
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;

    .title {
      font-size: 24px;
      line-height: 83%;
      font-weight: 600;
      color: #14446e;
    }
  }

  .bottom {
    justify-content: flex-end;
    border-top: 1px solid #e1e1e1;
  }
}
</style>
