<template>
  <SaveOrCancelModal :show="true" @save="handleButtonClick">
    <template #title>Login</template>
    <div class="auth-wrapper">
      <InputField v-model="username" placeholder="Username..." />
      <InputField v-model="password" placeholder="Password..." />
    </div>
  </SaveOrCancelModal>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import InputField from '@/components/InputField.vue';
import SaveOrCancelModal from '@/components/SaveOrCancelModal.vue';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');

const handleButtonClick = () => {
  authStore.login();
  router.push('catalog');
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
}
</style>
