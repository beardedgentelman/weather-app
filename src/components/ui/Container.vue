<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-container',
};
</script>

<style scoped>
.container{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
@media screen and (max-width: 360px){
  .container{
    max-width: 360px;
  }
}
</style>
