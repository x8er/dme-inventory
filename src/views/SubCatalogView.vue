<template>
  <SelectionBlock
    title="Subcategories"
    :items="subcategories"
    @updated="handleUpdated"
    @created="handleCreated"
    @selected="handleSelected"
  />
  <RouterView />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import SelectionBlock from '@/components/SelectionBlock.vue';
import { getAllSubcategories, createNewSubcategory } from '@/api/categories';

const router = useRouter();

const subcategories = ref([]);

const handleUpdated = (updated) => {
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
  subcategories.value.push(result);
};

const handleSelected = (id) => {
  router.push(`/catalog/${router.currentRoute.value.params.catId}/${id}`);
};

onMounted(async () => {
  subcategories.value = await getAllSubcategories();
});
</script>

<style lang="scss" scoped></style>
