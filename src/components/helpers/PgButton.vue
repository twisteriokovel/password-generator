<template>
  <button class="pg-button" @click="$emit('click', $event)">
    B
  </button>
</template>

<script lang="ts" setup>
  defineProps<{
    icon: string
  }>()

  defineEmits<{
    (e: 'click', ev: MouseEvent): void
  }>()
</script>

<style scoped>
  .pg-button {
    display: block;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
</style>
