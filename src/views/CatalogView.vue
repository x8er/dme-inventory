<template>
  <div class="catalog-container">
    <SelectionBlock
      title="Categories"
      :items="categories"
      :select="parseInt(router.currentRoute.value.params?.catId)"
      @updated="handleUpdated"
      @selected="handleSelected"
    />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SelectionBlock from '@/components/SelectionBlock.vue';

const router = useRouter();

const categories = ref([{ id: 1, name: 'Test Category' }]);

const handleUpdated = (updated) => {
  categories.value = categories.value.map((val) =>
    val.id === updated.id ? updated : val
  );
};

const handleSelected = (id) => {
  router.push(`/catalog/${id}`);
};
</script>

<style lang="scss" scoped>
.catalog-container {
  display: flex;
}
</style>
