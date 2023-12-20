<template>
  <div class="app">
    <my-dialog :is-show="showDialog" >
      <confirm-delete-block @close-dialog="showDialog = false"
                            @remove-block="removeBlock" :selected-block="selectedBlockDialog.value">
      </confirm-delete-block>
    </my-dialog>
    <weather-navigation
        @on-page-selected="handlePageSelect"
        @on-add-weather-block="handleAddWeatherBlock"
        @on-remove-block="handleRemoveBlock"
        :weather-blocks="weatherBlocks"
        :selected-page="selectedPage">
    </weather-navigation>
    <my-container>
      <favorites-weather-page v-if="selectedPage === -1"></favorites-weather-page>
      <weather-dashboard v-else :data="selectedBlock" @select-city="setBlockData">
      </weather-dashboard>
    </my-container>
  </div>
</template>

<script setup>
import WeatherNavigation from '@/components/WeatherNavigation.vue';
import { useI18n } from 'vue-i18n';
import {
  computed,
  reactive,
  ref,
} from 'vue';
import FavoritesWeatherPage from '@/views/FavoritesWeatherPage.vue';
import WeatherDashboard from '@/views/WeatherDashboard.vue';
import MyContainer from '@/components/ui/Container.vue';
import MyDialog from '@/components/ui/MyDialog.vue';
import ConfirmDeleteBlock from '@/components/ui/ConfirmDeleteBlock.vue';
import { fetchWeather } from '@/lib/fetch';
// eslint-disable-next-line no-unused-vars
const { t, locale } = useI18n({ useScope: 'global' });

const selectedPage = ref(0);
const weatherBlocks = ref([{
  title: 'Dashboard',
  id: 0,
  day: null,
  charts: null,
}]);
const showDialog = ref(false);
const id = ref(0);
const selectedBlockDialog = reactive({
  id: null,
  title: null,
});
const handlePageSelect = (page) => {
  selectedPage.value = page;
};

const selectedBlock = computed(() => (selectedPage.value === -1 ? null
  : weatherBlocks.value.find((block) => block.id === selectedPage.value)));
const handleAddWeatherBlock = () => {
  id.value += 1;
  if (weatherBlocks.value.length >= 5) {
    return;
  }
  const newBlock = {
    title: `Dashboard ${id.value}`,
    id: id.value,
  };
  weatherBlocks.value.push(newBlock);
};
const handleRemoveBlock = (blockId) => {
  selectedBlockDialog.value = weatherBlocks.value.find((block) => block.id === blockId);
  showDialog.value = true;
};
const removeBlock = (blockId) => {
  showDialog.value = false;
  selectedBlockDialog.value = {
    id: null,
    title: null,
  };
  selectedPage.value = 0;
  weatherBlocks.value = weatherBlocks.value.filter((block) => block.id !== blockId);
};
const setBlockData = async (city) => {
  const {
    day,
    charts,
  } = await fetchWeather(city.description);
  selectedBlock.value.title = city.description;
  selectedBlock.value.day = day;
  selectedBlock.value.charts = charts;
};
// onMounted(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       const city = await fetchUserLocation(position.coords.latitude, position.coords.longitude);
//       if (!city) return;
//       await setBlockData(city);
//     });
//   }
// });
</script>

<style >
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
*{
  transition: color 0.3s;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}
*:focus {
  outline: none;
}

button, [role="button"] {
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
}
.logo{
  color: aliceblue;
}
.app{
  min-height: 100vh;
  padding: 0;
  padding-bottom: 10px;
  width: 100%;
  margin: 0;
  background: rgb(54,113,223);
  background: linear-gradient(0deg, rgba(54,113,223,1) 9%, rgba(35,79,176,1) 71%);

}

</style>
