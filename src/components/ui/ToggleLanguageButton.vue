<template>
  <button @click="toggleLanguage" class="toggle-button">
    {{ locale }}
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ua' : 'en';
};

</script>

<style scoped>
.toggle-button {
  padding: 0px 10px;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  background: aliceblue;
  border-radius: 10px;
}
.toggle-button:hover{
  background: #fffaf6;
}
</style>
