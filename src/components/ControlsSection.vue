<template>
  <section class="controls-section">
    <div class="container controls-container">
      <div class="column controls-column">
        <PgRangeSlider />
      </div>
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
  // helpers
  import { watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { usePasswordSettingsStore } from '@/store/passwordSettings'

  // components
  import PgToggle from './helpers/PgToggle.vue'
  import PgRangeSlider from './helpers/PgRangeSlider.vue'

  const { charactersEnabled } = storeToRefs(usePasswordSettingsStore())

  watch(() => charactersEnabled.value.lowercaseLetters, nv => {
    if (!nv) {
      charactersEnabled.value.uppercaseLetters = true
    }
  })

  watch(() => charactersEnabled.value.uppercaseLetters, nv => {
    if (!nv) {
      charactersEnabled.value.lowercaseLetters = true
    }
  })
</script>

<style lang="scss" scoped>
  .controls {
    &-container{
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: nowrap;
      }
    }

    &-section {
      padding: 2rem 0;

      @media screen and (min-width: 768px) {
        padding: 3.5rem 0;
      }
    }

    &-column {
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
    }
  }
</style>
