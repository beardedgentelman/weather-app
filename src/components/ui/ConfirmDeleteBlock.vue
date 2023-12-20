<template>
  <div class="window">
    <p>{{ $t('RemoveBlockDialog.title') + ` ${props.selectedBlock.title}?` }} </p>
    <div class="buttonsWrap">
      <button @click="removeBlock">{{$t('RemoveBlockDialog.yesButton')}}</button>
      <button @click="closeDialog">{{ $t('RemoveBlockDialog.noButton') }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['closeDialog', 'removeBlock']);
const props = defineProps({
  selectedBlock: {
    type: Object,
  },
});

const closeDialog = () => {
  emit('closeDialog');
};

const removeBlock = () => {
  emit('removeBlock', props.selectedBlock.id);
};
</script>

<style scoped>
.window{
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.buttonsWrap {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.buttonsWrap button{
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid dodgerblue;
  font-size: 15px;
}
.buttonsWrap button:hover{
  background: #3575ac;
  transition: color;
  color: #fffaf6;
}

</style>
