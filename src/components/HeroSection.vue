<template>
  <section class="hero-section">
    <div class="container">
      <div class="select-wrapper">
        <PgSelect />
      </div>
    </div>
  </section>
</template>

<script setup>
import PgSelect from './helpers/PgSelect.vue'
</script>

<style lang="scss">
  .hero-section {
    background-color: $grey-light;
    @include px-to-rem(padding-top, 50);
    @include px-to-rem(padding-bottom, 96);
  }

  .select-wrapper {
    display: flex;
    justify-content: flex-end;
  }
</style>