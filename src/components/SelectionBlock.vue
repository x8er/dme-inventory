<template>
  <div class="selection-block">
    <div class="head">
      <TitleWithAdd @click="handleAddClick">Categories</TitleWithAdd>
    </div>
    <div class="list">
      <div @click="handleItemClick">
        Text
        <PencilSVG @click.stop="handlePencilClick" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleWithAdd from '@/components/TitleWithAdd.vue';
import PencilSVG from '@/assets/icons/pencil.svg';

const handleAddClick = () => {
  console.log('kekw');
};

const handleItemClick = () => {
  console.log('item click')
};

const handlePencilClick = () => {
  console.log('pencil click');
};
</script>

<style lang="scss" scoped>
.selection-block {
  border-right: 1px solid #e1e1e1;
  width: 260px;

  .list > div,
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    padding: 0 10px 0 20px;
    height: 40px;
  }

  .list > div {
    cursor: pointer;
  }

  .head {
    height: 50px;
  }
}
</style>
