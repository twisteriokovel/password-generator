<template>
  <HeroSection />
  <ControlsSection />
</template>

<script lang="ts" setup>
  // helpers
  import { onBeforeMount } from 'vue'
  import { usePasswordSettingsStore } from './store/passwordSettings'

  // components
  import HeroSection from './components/HeroSection.vue'
  import ControlsSection from './components/ControlsSection.vue'

  const { generatePassword } = usePasswordSettingsStore()

  onBeforeMount(generatePassword)
</script>
