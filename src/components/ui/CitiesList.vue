<template>
  <ul class="list" v-if="citiesList.length > 0">
    <li v-for="city in props.citiesList" :key="city.place_id"
        @keydown.enter="handleCitySelect(city)"
        @click="handleCitySelect(city)" class="list-item">
      {{ truncateString(city.description, 15) }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import truncateString from '@/lib/lib';

const props = defineProps({
  citiesList: Array,
});
const emit = defineEmits(['selectCity']);

const handleCitySelect = (city) => {
  emit('selectCity', city);
};

</script>

<style scoped>
.list {
  position: absolute;
  border-radius: 10px;
  background: white;
  width: 200px;
  margin-top: 3px;
  padding-left: 0;
}

.list-item {
  padding: 5px;
  list-style: none;
  transition: color 0.3s;
  cursor: pointer;
}
.list-item:not(:first-child){
  border-top: 1px solid lightslategray;
}
.list-item:first-child{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.list-item:last-child{
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
}

.list-item:hover {
  transition: color 0.3s;
  background: cornflowerblue;
}
</style>
