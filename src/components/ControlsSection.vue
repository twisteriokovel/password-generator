<template>
  <section>
    <div class="container">
      <div class="column">
        <PgToggle
          v-model="areSymbolsEnabled"
          :title="$t('include_symbols')"
          :description="$t('include_symbols_example')"
        />
        <PgToggle :title="$t('include_symbols')" :description="$t('include_symbols_example')" />
      </div>
      <div class="column" />
      <div class="column" />
      <div class="column" />
      {{ $t('main_title') }}
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import PgToggle from './helpers/PgToggle.vue'

  const areSymbolsEnabled = ref(true)
</script>
