<template>
  <button @click="toggleToFavorites"
          class="favorites-button"
          :class="{'on-favorites': isFavorites}">
    ★
  </button>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { toggleFavorites } from '@/lib/lib';

const props = defineProps({
  id: Number,
});

const isFavorites = ref(false);

const toggleToFavorites = () => {
  toggleFavorites(props.id);
  isFavorites.value = !isFavorites.value;
};

onMounted(() => {
  const favoritesIds = JSON.parse(localStorage.getItem('favoritesIds')) || [];
  if (favoritesIds && favoritesIds.length) {
    if (favoritesIds.includes(props.id)) {
      isFavorites.value = true;
    }
  }
});
</script>

<style scoped>
.favorites-button {
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 10px;
  outline: 2px solid #fffaf6;
  color: #fffaf6;
}

.favorites-button:not(.on-favorites):hover {
  background-color: rgba(206, 190, 190, 0.2);
  color: #24527b;
  transition: color 0.3s;
}

.favorites-button.on-favorites {
  color: #1d4768;
  background: #dfd8d8;
  outline: none;
}

</style>
