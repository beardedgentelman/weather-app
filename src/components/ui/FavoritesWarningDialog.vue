<template>
  <div>
    <p>{{ $t('FavoritesWarning.title') }}</p>
    <p>{{ $t('FavoritesWarning.message') }}</p>
    <button @click="emit('closeWindow')">
      Ok
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['closeWindow']);
</script>

<style scoped>
</style>
