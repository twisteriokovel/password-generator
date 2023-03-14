<template>
  <div class="pg-toggle">
    <label class="pg-toggle__label">
      <input class="pg-toggle__input" type="checkbox">
    </label>

    <p class="pg-toggle__title">
      {{ title }}
    </p>
    <p class="pg-toggle__description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string;
      description?: string;
    }>(), {
      title: '',
      description: ''
    }
  )
</script>

<style lang="scss" scoped>
  .pg-toggle {
    display: flex;

  }
</style>
