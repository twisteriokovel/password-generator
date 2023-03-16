<template>
  <div class="password-field-wrapper">
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

    <Transition mode="out-in">
      <p v-if="isShownCopiedMessage" class="password-field__success-message">
        {{ $t('copied_successfully') }}
      </p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  // helpers
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { usePasswordSettingsStore } from '../store/passwordSettings'

  // components
  import PgButton from './helpers/PgButton.vue'

  const { generatedPassword } = storeToRefs(usePasswordSettingsStore())
  const { generatePassword } = usePasswordSettingsStore()

  const isShownCopiedMessage = ref(false)

  async function copyPassword () {
    try {
      await navigator.clipboard.writeText(generatedPassword.value)
      isShownCopiedMessage.value = true

      setTimeout(() => isShownCopiedMessage.value = false, 3000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
</script>

<style lang="scss" scoped>
  .password-field {
    background-color: $color-white;
    display: flex;
    box-shadow: 0px 0.25rem 0.25rem rgba(51, 51, 51, 0.04), 0px 0.25rem 1rem rgba(51, 51, 51, 0.08);
    border-radius: 0.25rem;
    padding: 0.875rem 1rem;

    @media screen and (min-width: 768px) {
      padding: 1rem 2rem;
    }

    &-wrapper {
      margin: auto;
      position: relative;

      @media screen and (min-width: 768px) {
        @include px-to-rem(max-width, 944);
      }
    }

    &__value {
      font-weight: 500;
      line-height: 2;
      font-family: $font-secondary;
      margin: 0 auto 0 0;

      @media screen and (min-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
      }
    }

    &__success-message {
      position: absolute;
      left: 2rem;
      bottom: -2rem;
      margin: 0;
    }
  }

  .copy-btn {
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
      margin-right: 2rem;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
