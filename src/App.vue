<template>
  <div id="app">
    <scroll-bar-auto-hide
      :contentStyle="{ maxHeight: '600px' }"
      :scrollBarStyle="{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }"
      :trackStyle="{ borderRadius: '10px' }"
    >
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
    </scroll-bar-auto-hide>
  </div>
</template>

<script>
import ScrollBarAutoHide from './ScrollBarAutoHide.vue'
export default {
  components: { ScrollBarAutoHide },
  name: 'App'
}
</script>

<style lang="scss" scoped>
.content {
  height: 300px;

  &:nth-child(1) {
    background-color: blue;
  }
  &:nth-child(2) {
    background-color: green;
  }
  &:nth-child(3) {
    background-color: red;
  }
  &:nth-child(4) {
    background-color: brown;
  }
  &:nth-child(5) {
    background-color: black;
  }
  &:nth-child(6) {
    background-color: yellow;
  }
}
</style>
