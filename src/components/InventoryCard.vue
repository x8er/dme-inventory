<template>
  <div class="inventory-card">
    <img :src="props.imgUrl" :alt="props.title" />
    <div class="info">
      <span class="title">{{ props.title }}</span>
      <span class="desc">{{ props.desc }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String, desc: String, imgUrl: String });
</script>

<style lang="scss" scoped>
.inventory-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  border-radius: 4px;
  width: 206px;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);

  img {
    width: 150px;
    min-height: 150px;
    margin-bottom: 20px;
  }

  .info {
    .title {
      display: block;
      font-weight: 600;
      color: #14446e;
      line-height: 113%;
      margin-bottom: 4px;
    }

    .desc {
      color: #8c99af;
      line-height: 120%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
