<template>
  <section class="controls-section">
    <div class="container controls-container">
      <div class="column controls-column" />
      <div class="column controls-column">
        <PgToggle
          v-model="charactersEnabled.symbols"
          :title="$t('include_symbols')"
          :description="$t('include_symbols_example')"
        />
        <PgToggle
          v-model="charactersEnabled.numbers"
          :title="$t('include_numbers')"
          :description="$t('include_numbers_example')"
        />
      </div>
      <div class="column controls-column">
        <PgToggle
          v-model="charactersEnabled.uppercaseLetters"
          :title="$t('include_uppercase')"
          :description="$t('include_uppercase_example')"
        />
        <PgToggle
          v-model="charactersEnabled.lowercaseLetters"
          :title="$t('include_lowercase')"
          :description="$t('include_lowercase_example')"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { usePasswordSettingsStore } from '@/store/passwordSettings'
  import PgToggle from './helpers/PgToggle.vue'

  const { charactersEnabled } = storeToRefs(usePasswordSettingsStore())
</script>

<style lang="scss" scoped>
  .controls {
    &-container{
      display: flex;
    }

    &-section {
      padding: 3.5rem;
    }

    &-column {
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
    }
  }
</style>
