<template>
  <div>
    <label for="search-weather">
      <input type="text" v-debounce:600="findCities" name="search-weather" class="input"
             :placeholder="$t('searchCities')" v-model="searchValue">
    </label>
    <loading-block v-if="isLoading" style="position: absolute; margin-left: 80px;">
    </loading-block>
    <cities-list v-else :cities-list="cities" @select-city="selectCity">
    </cities-list>
  </div>
</template>

<script setup>
import {
  ref,
  defineEmits,
  watch,
  defineProps,
} from 'vue';
import { fetchLocations } from '@/lib/fetch';
import CitiesList from '@/components/ui/CitiesList.vue';
import LoadingBlock from '@/components/ui/LoadingBlock.vue';

const searchValue = ref('');
const cities = ref([]);
const isLoading = ref(false);

const findCities = async (value) => {
  isLoading.value = true;
  const predictions = await fetchLocations(value);
  isLoading.value = false;
  if (predictions) {
    cities.value = predictions;
  }
};
const emit = defineEmits(['selectCity']);
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
});

const selectCity = (city) => {
  cities.value = [];
  searchValue.value = city.description;
  emit('selectCity', city);
};

// eslint-disable-next-line no-shadow,no-unused-vars
watch(() => props.title, (newTitle, oldTitle) => {
  searchValue.value = '';
  cities.value = [];
  isLoading.value = false;
});
</script>

<style scoped>
.input {
  font-size: 18px;
  border-radius: 10px;
  padding: 5px 5px;
  background: aliceblue;
}

.input:focus {
  outline: #1d4768 solid 2px;
  background: #fffaf6;
  transition: color;
}

</style>
