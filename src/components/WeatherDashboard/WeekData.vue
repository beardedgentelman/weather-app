<template>
  <div v-for="day in props.weekData" :key="day.id">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  weekData: Array,
});
</script>

<style scoped>

</style>
