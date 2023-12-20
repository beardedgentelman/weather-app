<template>
  <div class="content">
    <div class="main-content-block">
      <span class="temp">{{ Math.round(props.dayData.main.temp) }}°</span>
      <div style="display: flex; justify-content: space-around">
        <span class="options-block-value">Max: {{ Math.round(props.dayData.main.temp_max) }}°</span>
        <span class="options-block-value">Min: {{ Math.round(props.dayData.main.temp_min) }}°</span>
      </div>
      <div>
        <span class="options-block-value">
          {{ $t('WeatherCard.feels_like') }}: {{ Math.round(props.dayData.main.feels_like) }}°
        </span>
      </div>
      <div style="margin-top: 10px;">
        <span class="options-block-value">
          {{ props.dayData.weather[0].main }}, {{props.dayData.weather[0].description}}.
        </span>
      </div>
    </div>
    <div class="content-options">
      <div class="options-block">
      <span class="options-block-title">
        {{ $t('WeatherCard.solarCycleTitle') }}
      </span>
        <div style="display: flex; justify-content: space-around">
          <div class="options-block-value">
            {{ $t('WeatherCard.sunrise') }}
            {{ sunrise }}
          </div>
          <div class="options-block-value">
            {{ $t('WeatherCard.sunset') }}
            {{ sunset }}
          </div>
        </div>
      </div>
      <div class="options-wrap">
        <div class="options-block">
          <span class="options-block-title">{{ $t('WeatherCard.visibility') }}</span>
          <span class="options-block-value">{{ props.dayData.visibility / 1000 }}km</span>
        </div>
        <div class="options-block">
          <span class="options-block-title">{{ $t('WeatherCard.clouds') }}</span>
          <span class="options-block-value">{{ props.dayData.clouds.all }}%</span>
        </div>
        <div class="options-block">
          <span class="options-block-title">{{ $t('WeatherCard.wind') }}</span>
          <span class="options-block-value">{{ Math.round(props.dayData.wind.speed) }} M/S</span>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

const props = defineProps({
  dayData: Object,
});

const sunrise = moment.unix(props.dayData.sys.sunrise).format('HH:mm').toString();
const sunset = moment.unix(props.dayData.sys.sunset).format('HH:mm').toString();
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  gap: 10px;
}

.options-block {
  font-size: 16px;
  min-width: 100px;
  text-align: center;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  flex-direction: column;
  color: #fffcf3;
  border-radius: 10px;
  padding: 20px;
}

.content-options{
  display: flex;
  flex-direction: column;
  flex:1;
  gap: 5px;
}
.options-block-title {
  text-align: center;
  font-size: 15px;
  color: #d4e1ec;
}
.options-wrap{
  display: flex;
  justify-content: space-around;
}
.temp{
  font-size: 60px;
}
.main-content-block{
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  font-size: 16px;
  color: #fffcf3;
  flex-direction: column;
  border-radius: 10px;
  padding: 13px;
  flex:1;
}
.options-block-value {
  font-size: 20px;
  margin-top: 5px;
}

@media screen and (max-width: 700px) {
  .options-block{
    padding: 5px;
  }
  .content-options{
    gap: 3px;
    flex-wrap: wrap;
  }
  .options-wrap{
    flex-wrap: wrap;
  }
  .content{
    flex-direction: column;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 500px) {
  .options-block{
    padding: 0;
  }
  .content-options{
    gap: 5px;
  }
  .content{
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
  }
}
</style>
