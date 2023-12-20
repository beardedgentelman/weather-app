<template>
  <div class="wrap">
    <div class="wrap-options">
      <search-weather @select-city="selectCity" :title="data.title"/>
      <favorites-button :id="props.data?.day.id" v-if="props.data?.day">
      </favorites-button>
    </div>
    <div>
      <h2 class="title" v-if="!props.data.title.includes('Dashboard')">
        {{ props.data.title }}.
      </h2>
      <weather-data :weather-data="props.data" v-if="props.data?.day"></weather-data>
    </div>
    <weather-charts v-if="props.data?.charts?.list" :weather-data="props.data.charts.list">
    </weather-charts>
    <div v-else-if="props.data.title === ' ' || props.data.title.includes('Dash')"
         class="select-wrap">
      {{ $t('WeatherData.selectCity') }}
    </div>
    <div class="select-wrap" v-else>
      {{ $t('WeatherData.notFound') }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import SearchWeather from '@/components/WeatherDashboard/SearchWeather.vue';
import WeatherData from '@/components/WeatherDashboard/WeatherData.vue';
import WeatherCharts from '@/components/WeatherDashboard/WeatherCharts.vue';
import FavoritesButton from '@/components/ui/FavoritesButton.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['selectCity']);

const selectCity = (city) => {
  emit('selectCity', city);
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0);
  padding: 10px 20px;
  gap: 80px;
}

.title {
  color: #fffcf3;
  text-align: center;
  margin-bottom: 10px;
  font-size: 30px;
}

.select-wrap {
  display: flex;
  justify-content: center;
  font-size: 22px;
  padding-bottom: 50px;
  color: #fffaf6;
}

.wrap-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .wrap{
    padding: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .wrap-options{
    margin-top: 10px;
  }
  .select-wrap{
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 300px) {
  .wrap{
    padding: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .wrap-options{
    margin-top: 5px;
  }
  .select-wrap{
    padding-bottom: 5px;
  }
}

</style>
