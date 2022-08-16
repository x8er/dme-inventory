<template>
  <div class="inventory-container">
    <div class="head">
      <TitleWithAdd @click="handleAddClick">Equipment List</TitleWithAdd>
    </div>
    <div class="list">
      <InventoryCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :desc="item.description"
        :img-url="item.images[0]"
      />
    </div>
    <SaveOrCancelModal
      :show="showModal"
      @save="handleSaveClick"
      @cancel="handleModalExit"
      @close="handleModalExit"
    >
      <template #title>Add</template>
      <div class="auth-wrapper">
        <InputField
          v-model="newItem.title"
          placeholder="Title..."
          @keyup.enter="handleSaveClick"
        />
        <InputField
          v-model="newItem.description"
          placeholder="Description..."
          @keyup.enter="handleSaveClick"
        />
      </div>
    </SaveOrCancelModal>
  </div>
</template>

<script setup>
import { onMounted, ref, toRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import TitleWithAdd from '@/components/TitleWithAdd.vue';
import InventoryCard from '@/components/InventoryCard.vue';
import InputField from '@/components/InputField.vue';
import SaveOrCancelModal from '@/components/SaveOrCancelModal.vue';
import { getAllProductsOfCategory } from '@/api/categories';
import { addProductToCategory } from '@/api/products';

const route = useRoute();

const routeParams = toRef(route, 'params');

const defaultNewItem = {
  title: '',
  description: '',
  price: 10,
  categoryId: null,
  images: [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdemo.olympusthemes.com%2Fscaffold%2Fwp-content%2Fuploads%2F2013%2F03%2Fimage-alignment-150x150.jpg&f=1&nofb=1',
  ],
};
const items = ref([]);
const showModal = ref(false);
const newItem = ref({ ...defaultNewItem });

const handleAddClick = () => {
  showModal.value = true;
};

const handleSaveClick = async () => {
  const result = await addProductToCategory({
    ...newItem.value,
    categoryId: parseInt(routeParams.value.subcatId),
  });

  showModal.value = false;
  newItem.value = { ...defaultNewItem };

  if (result.statusCode === 404) return;

  items.value.push(result);
};

const handleModalExit = () => {
  showModal.value = false;
  newItem.value = { ...defaultNewItem };
};

watch(routeParams, async (newRouteParams) => {
  if (!newRouteParams.subcatId) return;
  items.value = await getAllProductsOfCategory(newRouteParams.subcatId);
});

onMounted(async () => {
  items.value = await getAllProductsOfCategory(route.params.subcatId);
});
</script>

<style lang="scss" scoped>
.inventory-container {
  width: 100%;
  height: 100vh;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    padding: 0 10px 0 20px;
    height: 50px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    height: calc(100% - 50px);
    overflow-y: auto;
  }
}
</style>
