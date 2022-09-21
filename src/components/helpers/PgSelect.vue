<template>
  <select v-model="$i18n.locale">
    <option>en</option>
    <option>ua</option>
  </select>
  {{ $t("language") }}
</template>
