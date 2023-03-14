<template>
  <div class="pg-select">
    <select v-model="$i18n.locale" class="pg-select-field">
      <option
        v-for="{value, label} in localesList"
        :key="value"
        :value="value"
        class="pg-select-option"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { availableLocales, messages } = useI18n()

  const localesList = computed(() => availableLocales.map(locale => ({
    value: locale,
    label: messages.value[ locale ].locale_name
  })))
</script>

<style lang="scss" scoped>
  .pg-select {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      background: #000;
      background: url('./icons/chevron-down.svg');
      pointer-events: none;
      right: 1rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &-field {
      border: 0.125rem solid $grey-dark;
      font-family: $font-primary, serif;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      line-height: 1.5;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;

      @include px-to-rem(width, 212);
    }
  }
</style>
