<template>
  <label class="pg-toggle">
    <input
      v-model="localValue"
      class="pg-toggle__input"
      type="checkbox"
    >
    <div class="pg-toggle__control" />

    <div class="pg-toggle__text">
      <p class="pg-toggle__title">
        {{ title }}
      </p>
      <p class="pg-toggle__description">
        {{ description }}
      </p>
    </div>
  </label>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      modelValue: boolean,
      title?: string;
      description?: string;
    }>(), {
      title: '',
      description: ''
    }
  )

  const emit = defineEmits<{
    (e: 'update:modelValue', ev: boolean): void
  }>()

  const localValue = computed({
    get: () => props.modelValue,
    set: val => {
      emit('update:modelValue', val)
    }
  })
</script>

<style lang="scss" scoped>
  .pg-toggle {
    cursor: pointer;
    display: flex;

    &__input {
      position: absolute;
      left: -9999px;
      visibility: hidden;

      &:checked {

        & + .pg-toggle__control {
          border-color: $color-default;
          background-color: $color-default;

          &::before {
            background-color: $color-white;
            transform: translateX(1.5rem);
          }
        }
      }
    }

    &__control {
      width: 3rem;
      height: 1.5rem;
      border-radius: 4rem;
      border: 2px solid $grey-dark;
      position: relative;
      margin-right: 0.75rem;

      @include transition(background-color);

      &::before {
        content: '';
        position: absolute;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: $color-default;
        top: 2px;
        left: 2px;

        @include transition((background-color, transform));
      }
    }

    &__title {
      line-height: 1.5;
      margin: 0;
    }

    &__description {
      font-size: 0.875rem;
      line-height: 1.125;
      color: $grey-dark;
      margin: 0;
    }

  }
</style>
