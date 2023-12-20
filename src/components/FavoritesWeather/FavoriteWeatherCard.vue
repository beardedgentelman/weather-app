<template>
  <div class="card">
    <remove-from-favorites-btn :id="props.weatherData.id" @weather-has-removed="removeWeather">
    </remove-from-favorites-btn>
    <div class="card-block row">
      <span class="temp">{{ props.weatherData.name }}</span>
      <span class="temp">{{ Math.round(props.weatherData.main.temp) }}°</span>
    </div>
    <div style="margin-top: 10px" class="card-block row">
      <div class="card-block">
        <span class="block-title">Min</span>
        <span class="block-value">{{ Math.round(props.weatherData.main.temp_min) }}°</span>
      </div>
      <div class="card-block">
        <span class="block-title">Max</span>
        <span class="block-value">{{ Math.round(props.weatherData.main.temp_max) }}°</span>
      </div>
    </div>
    <div class="card-block row">
      <div class="card-block">
        <span class="block-title">{{ $t('WeatherCard.visibility') }}</span>
        <span class="block-value">{{ props.weatherData.visibility / 1000 }}km</span>
      </div>
      <div class="card-block">
        <span class="block-title">{{ $t('WeatherCard.clouds') }}</span>
        <span class="block-value">{{ props.weatherData.clouds.all }}%</span>
      </div>
    </div>
    <div style="margin-top: 15px;">
      {{ props.weatherData.weather[0].main }}, {{ props.weatherData.weather[0].description }}.
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import RemoveFromFavoritesBtn from '@/components/FavoritesWeather/RemoveFromFavoritesBtn.vue';

const props = defineProps({
  weatherData: Object,
});
const emit = defineEmits(['weatherHasRemoved']);
const removeWeather = (id) => {
  emit('weatherHasRemoved', id);
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: rgb(255, 255, 255, 0.4);
  color: #fffcf3;
  font-size: 16px;
  border-radius: 10px;
  padding: 15px;
  width: 220px;
}

.card-block {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
}

.row {
  flex-direction: row;
  align-items: center;
}

.block-title {
  color: #bdc5cc;
  font-size: 15px;
}

.block-value {
  font-size: 19px;
}

.temp {
  font-size: 23px;
}

</style>
