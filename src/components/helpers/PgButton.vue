<template>
  <button class="pg-button" @click="$emit('click', $event)">
    <svg class="pg-button__icon">
      <use :xlink:href="`./icons/button-sprite.svg#${icon}`" />
    </svg>
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

<style lang="scss" scoped>
  .pg-button {
    display: flex;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;

    @media screen and (min-width: 768px) {
      width: 3rem;
      height: 3rem;
    }

    &__icon {
      width: 1.25rem;
      height: 1.25rem;

      @media screen and (min-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
</style>
