<template>
  <div class="pg-range-slider">
    <p class="pg-range-slider__title">
      {{ $t('password_length') }}
    </p>

    <div class="pg-range-slider__controls">
      <div class="pg-range-slider__counter">
        {{ passwordLength }}
      </div>
      <VueSlider
        v-model="passwordLength"
        :min="PASSWORD_MIN_LENGTH"
        :max="PASSWORD_MAX_LENGTH"
        :dot-size="24"
        tooltip="none"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { usePasswordSettingsStore } from '@/store/passwordSettings'
  import { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from '@/helpers/constants'

  import VueSlider from 'vue-slider-component'

  const { passwordLength } = storeToRefs(usePasswordSettingsStore())
</script>

<style lang="scss">
  .pg-range-slider {
    &__title {
      line-height: 1.5;
      margin: 0 0 1rem;
    }

    &__controls {
      display: flex;
      column-gap: 1.5rem;
      align-items: center;
    }

    &__counter {
      border: 2px solid $grey-dark;
      border-radius: 0.25rem;
      width: 3.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .vue-slider {
    min-width: 200px;

    &-rail {
      background-color: $grey-dark;
      border-radius: 2px;
    }

    &-process {
      background-color: $color-default;
      border-radius: 2px;
    }

    &-dot {
      background-color: $color-default;
      border-radius: 50%;
    }
  }
</style>
