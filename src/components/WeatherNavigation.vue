<template>
  <header>
    <my-container>
      <div class="top-header-nav">
        <div class="logo">
          <h2>Weather App</h2>
        </div>
        <toggle-language-button>
        </toggle-language-button>
      </div>
      <nav>
        <button class="nav-item" @click="selectPage(0)"
                :class="{'active' : +props.selectedPage === 0}">
          {{ truncateString(props.weatherBlocks[0].title) }}
        </button>
        <button class="nav-item" @click="selectPage(-1)"
                :class="{'active' : +props.selectedPage === -1}">
          {{ $t('Navigation.favorites') }}
        </button>
        <div v-for="block in props.weatherBlocks.slice(1)"
             @keydown.tab="selectPage(block.id)"
             :key="block.id" class="nav-item"
             :class="{'active' : +props.selectedPage === +block.id}"
             @click.stop="selectPage(block.id)">
          {{ truncateString(block.title)  }}
          <button @click.stop="removeBlock($event, block.id)" class="remove-block-button">
            X
          </button>
        </div>
        <button class="add-block-button" @click="addBlock"
                :class="{'disabled': weatherBlocks.length >= 5}">
          +
        </button>
      </nav>
    </my-container>
  </header>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import MyContainer from '@/components/ui/Container.vue';
import ToggleLanguageButton from '@/components/ui/ToggleLanguageButton.vue';
import truncateString from '../lib/lib';

const props = defineProps({
  weatherBlocks: {
    type: Array,
    required: true,
  },
  selectedPage: Number,
});

const emit = defineEmits(['onPageSelected', 'onAddWeatherBlock', 'onRemoveBlock', 'changeLanguage']);
const selectPage = (page) => {
  if (page === props.selectedPage) {
    return;
  }
  emit('onPageSelected', page);
};
const addBlock = () => {
  if (props.weatherBlocks.length >= 5) {
    return;
  }
  emit('onAddWeatherBlock');
};
const removeBlock = (event, blockId) => {
  event.preventDefault();
  emit('onRemoveBlock', blockId);
};

</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  flex: 1;
}

nav {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px
}

.nav-item {
  font-size: 15px;
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: aliceblue;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .nav-item {
    border-radius: 0px;
  }
}
.nav-item.active {
  transition: color 0.3s;
  background: #3575ac;
  color: #fffcf3;
  cursor: default;
}

.nav-item:not(.active) {
  border-bottom: none;
}

.add-block-button {
  border-radius: 10px;
  border: none;
  background: none;
  color: gainsboro;
  font-size: 23px;
  padding: 5px 10px;
}

.add-block-button.disabled {
  color: dimgrey;
  cursor: default;
}

.remove-block-button {
  font-size: 14px;
  padding: 2px 5px;
  color: gray;
  border-radius: 50%;
}

.remove-block-button:hover {
  background: gainsboro;
  transition: color 0.3s;
}

.add-block-button:not(.disabled):hover {
  background: #0e6ad3;
  cursor: pointer;
}

.nav-item:not(.active):hover {
  cursor: pointer;
  background: #fffaf6;
}

.top-header-nav {
  display: flex;
  justify-content: space-between;
}
</style>
