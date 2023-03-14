<template>
  <div class="password-field">
    <p class="password-field__value">
      {{ generatedPassword }}
    </p>

    <PgButton
      icon="copy"
      class="copy-btn"
      @click="copyPassword"
    />
    <PgButton icon="generate" @click="generatePassword" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PgButton from './helpers/PgButton.vue'

  const generatedPassword = ref('dasdasdsa')

  function copyPassword () {
    console.log('copy')
  }

  function generatePassword () {
    console.log('generate')
  }
</script>

<style lang="scss" scoped>
  .password-field {
    background-color: $color-white;
    display: flex;
    margin: auto;
    box-shadow: 0px 0.25rem 0.25rem rgba(51, 51, 51, 0.04), 0px 0.25rem 1rem rgba(51, 51, 51, 0.08);
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    @include px-to-rem(max-width, 944);

    &__value {
      font-weight: 500;
      font-size: 2rem;
      font-family: $font-secondary;
      line-height: 3rem;
      margin: 0 auto 0 0;
    }
  }

  .copy-btn {
    margin-right: 2rem;
  }
</style>
