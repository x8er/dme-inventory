<template>
  <div>
    <span>Catalog View</span>
    <RouterView />
    <SaveOrCancelModal> </SaveOrCancelModal>
  </div>
</template>

<script setup>
import SaveOrCancelModal from '@/components/SaveOrCancelModal.vue';
</script>

<style lang="scss" scoped></style>
