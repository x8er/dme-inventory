<template>
  <div class="selection-block">
    <div class="head">
      <TitleWithAdd @click="handleAddClick">{{ props.title }}</TitleWithAdd>
    </div>
    <div class="list">
      <div
        v-for="item in props.items"
        :key="item.id"
        :class="{ selected: selectedItemId === item.id }"
        @click="handleItemClick(item.id)"
      >
        {{ item.name }}
        <PencilSVG @click.stop="handlePencilClick(item)" />
      </div>
    </div>
    <SaveOrCancelModal
      :show="showModal"
      @save="handleSaveClick"
      @cancel="handleModalExit"
      @close="handleModalExit"
    >
      <template v-if="isAddAction" #title>Add</template>
      <template v-else #title>Edit</template>
      <div class="auth-wrapper">
        <InputField
          v-model="updatedItem.name"
          placeholder="Name..."
          @keyup.enter="handleSaveClick"
        />
      </div>
    </SaveOrCancelModal>
  </div>
</template>

<script setup>
import { ref, toRef, watch } from 'vue';
import TitleWithAdd from '@/components/TitleWithAdd.vue';
import SaveOrCancelModal from '@/components/SaveOrCancelModal.vue';
import InputField from '@/components/InputField.vue';
import PencilSVG from '@/assets/icons/pencil.svg';

const props = defineProps({ title: String, items: Array, select: Number });
const emits = defineEmits(['selected', 'updated', 'created']);

const refSelect = toRef(props, 'select');
const showModal = ref(false);
const isAddAction = ref(false);
const updatedItem = ref({ name: '' });
const selectedItemId = ref(refSelect.value);

const handleAddClick = () => {
  showModal.value = true;
  isAddAction.value = true;
};

const handlePencilClick = (item) => {
  updatedItem.value = { ...item, name: item.name.trim() };
  showModal.value = true;
};

const handleItemClick = (id) => {
  emits('selected', id);
};

const handleSaveClick = () => {
  emits(isAddAction.value ? 'created' : 'updated', updatedItem.value);
  isAddAction.value = false;
  showModal.value = false;
  updatedItem.value = { name: '' };
};

const handleModalExit = () => {
  isAddAction.value = false;
  showModal.value = false;
  updatedItem.value = { name: '' };
};

watch(refSelect, (newValue) => {
  selectedItemId.value = newValue;
});
</script>

<style lang="scss" scoped>
.selection-block {
  border-right: 1px solid #e1e1e1;
  min-width: 260px;

  .list > div,
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;
    padding: 0 10px 0 20px;
    height: 40px;
  }

  .list {
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    & > div {
      cursor: pointer;
      color: #14446e;
      font-weight: 500;
      font-size: 0.875rem;

      &.selected {
        background-color: #f5f7fb;
        border: 1px solid #05a3ad;
        color: #05a3ad;
      }
    }
  }

  .head {
    height: 50px;
  }
}
</style>
