<template>
  <section class="controls-section">
    <div class="container controls-container">
      <div class="column controls-column" />
      <div class="column controls-column">
        <PgToggle
          v-model="areSymbolsEnabled"
          :title="$t('include_symbols')"
          :description="$t('include_symbols_example')"
        />
        <PgToggle
          v-model="areNumbersEnabled"
          :title="$t('include_numbers')"
          :description="$t('include_numbers_example')"
        />
      </div>
      <div class="column controls-column">
        <PgToggle
          v-model="areUppercaseCharactersEnabled"
          :title="$t('include_uppercase')"
          :description="$t('include_uppercase_example')"
        />
        <PgToggle
          v-model="areLowercaseCharactersEnabled"
          :title="$t('include_lowercase')"
          :description="$t('include_lowercase_example')"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import PgToggle from './helpers/PgToggle.vue'

  const areSymbolsEnabled = ref(false)
  const areNumbersEnabled = ref(false)
  const areUppercaseCharactersEnabled = ref(false)
  const areLowercaseCharactersEnabled = ref(false)
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
