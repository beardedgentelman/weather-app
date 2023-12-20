<template>
  <div class="wrap">
    <h1 style="color: #fffcf3; text-align: center">
      {{ $t('FavoritesPage.title') }}
    </h1>
    <loading-block v-if="isLoading">
    </loading-block>
    <div v-else>
      <div class="content" v-if="favoritesWeathers.length > 0">
        <div v-for="weather in favoritesWeathers" :key="weather.id">
          <favorite-weather-card :weather-data="weather" @weather-has-removed="removeWeather">
          </favorite-weather-card>
        </div>
      </div>
      <div v-else class="message">
        <p>{{ $t('FavoritesPage.empty') }}</p>
        <p>{{ $t('FavoritesPage.message') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { fetchWeatherById } from '@/lib/fetch';
import FavoriteWeatherCard from '@/components/FavoritesWeather/FavoriteWeatherCard.vue';
import LoadingBlock from '@/components/ui/LoadingBlock.vue';

const favoritesWeathers = ref([]);
const isLoading = ref(false);
const getFavoritesWeather = async () => {
  const weathersIds = JSON.parse(window.localStorage.getItem('favoritesIds')) || [];

  // eslint-disable-next-line no-restricted-syntax
  for (const id of weathersIds) {
    // eslint-disable-next-line no-await-in-loop
    favoritesWeathers.value.push(await fetchWeatherById(id));
  }
};
const removeWeather = (id) => {
  favoritesWeathers.value = favoritesWeathers.value.filter((weather) => weather.id !== id);
};

onMounted(async () => {
  isLoading.value = true;
  await getFavoritesWeather();
  isLoading.value = false;
});
</script>

<style scoped>
.wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0);
  padding: 40px 20px;
}

.message {
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.message p {
  font-size: 24px;
  color: #fffcf3;
}

.content {
  margin-top: 20px;
  display: flex;
  justify-content: start;
  gap: 25px;
}

@media screen and (max-width: 600px) {
 .content{
   flex-wrap: wrap;
   flex-direction: column;
   align-items: center;
   gap: 10px;
 }
}
</style>
