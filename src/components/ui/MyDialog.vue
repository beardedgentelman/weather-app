<template>
  <div class="dialog" v-if="props.isShow">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});

</script>
<style scoped>

.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background: rgba(0,0,0, 0.5);
  z-index: 1000;
}
.dialog-content{
  margin: auto;
  background: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
