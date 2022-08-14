<template>
  <input
    type="text"
    :value="props.modelValue"
    @input="emits('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps({ modelValue: String });
const emits = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #e1e1e1;
  line-height: 120%;
  font-weight: 500;

  &::placeholder {
    color: #8c99af;
  }
}
</style>
