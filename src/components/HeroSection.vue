<template>
  <section class="hero-section">
    <div class="container">
      <div class="select-wrapper">
        <PgSelect />
      </div>
      <i18n-t
        keypath="app_title"
        tag="h1"
        class="hero-title"
      >
        <template #name>
          <br><span class="hero-title__name">{{ $t('app_name') }}</span><br>
        </template>
      </i18n-t>

      <PasswordField />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import PgSelect from './helpers/PgSelect.vue'
  import PasswordField from './PasswordField.vue'
</script>

<style lang="scss" scoped>
  .hero-section {
    background-color: $grey-light;
    @include px-to-rem(padding-top, 50);
    @include px-to-rem(padding-bottom, 96);
  }

  .select-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .hero-title {
    font-size: 3.5rem;
    font-family: $font-secondary;
    font-weight: 400;
    @include px-to-rem(margin-top, 96);
    @include px-to-rem(margin-bottom, 96);

    &__name {
      background-color: $color-default;
      color: $grey-light;
      display: inline-block;
      padding: 0 0.5rem;
    }
  }
</style>
