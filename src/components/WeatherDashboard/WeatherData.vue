<template>
  <div class="content" v-if="props.weatherData.day">
<!--    <my-dialog :is-show="isShowDialog">-->
<!--      <FavoritesWarningDialog @close-window="isShowDialog.value=false">-->
<!--      </FavoritesWarningDialog>-->
<!--    </my-dialog>-->
    <day-data  :day-data="props.weatherData.day">
    </day-data>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import DayData from '@/components/WeatherDashboard/DayData.vue';
// import MyDialog from '@/App.vue';
// import FavoritesWarningDialog from '@/components/ui/FavoritesWarningDialog.vue';

const props = defineProps({
  weatherData: Object || null,
});

</script>

<style scoped>

.buttons-wrap {
  display: flex;
  justify-content: flex-end;
}

</style>
