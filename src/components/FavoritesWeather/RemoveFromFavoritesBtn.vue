<template>
  <button @click="handleRemoveClick" class="remove_btn">
    X
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
// eslint-disable-next-line import/named
import { removeFromFavorites } from '@/lib/lib';

const props = defineProps({
  id: Number,
});

const emit = defineEmits(['weatherHasRemoved']);

const handleRemoveClick = () => {
  if (removeFromFavorites(props.id)) {
    emit('weatherHasRemoved', props.id);
  }
};
</script>

<style scoped>
.remove_btn {
  padding: 5px 10px;
  position: absolute;
  right: -15px;
  top: -15px;
  font-size: 18px;
  border-radius: 10px;
  color: gray;
  background: #bdc5cc;
}

.remove_btn:hover {
  background: #f4f4f4;
  transition: color 0.3s;
}
@media screen and (max-width: 600px) {
  padding: 5px;
  max-width: 230px;
}
</style>
