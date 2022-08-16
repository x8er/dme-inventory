<template>
  <SelectionBlock
    title="Subcategories"
    :items="subcategories"
    :select="refSubcatId"
    @updated="handleUpdated"
    @created="handleCreated"
    @selected="handleSelected"
  />
  <RouterView />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import SelectionBlock from '@/components/SelectionBlock.vue';
import {
  getAllSubcategories,
  createNewSubcategory,
  updateSubcategory,
} from '@/api/categories';

const router = useRouter();
const route = useRoute();

const subcategories = ref([]);
const refSubcatId = ref();

const handleUpdated = async (updated) => {
  if (
    (await updateSubcategory(
      {
        name: updated.name,
      },
      updated.id
    )) !== 200
  )
    return;

  subcategories.value = subcategories.value = subcategories.value.map((val) =>
    val.id === updated.id ? updated : val
  );
};

const handleCreated = async (created) => {
  const result = await createNewSubcategory({
    name: created.name,
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaper-mobile.com%2Ffree_download%2F640_480_wallpapers%2F11201321%2FB%2FB_pinklandsc_XmeE4cdI.jpg&f=1&nofb=1',
  });

  if (!result) return;

  subcategories.value.push(result);
};

const handleSelected = (id) => {
  router.push(`/catalog/${router.currentRoute.value.params.catId}/${id}`);
};

watch(
  () => parseInt(route.params?.subcatId),
  (newValue) => {
    refSubcatId.value = newValue;
  },
  { immediate: true }
);

onMounted(async () => {
  subcategories.value = await getAllSubcategories();
});
</script>

<style lang="scss" scoped></style>
