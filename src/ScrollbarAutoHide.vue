<template>
  <div class="scrollbar-auto-hide">
    <div
      class="scrollbar-auto-hide__content"
      :style="contentStyle"
      @scroll="scrollEvent"
    >
      <slot></slot>
    </div>
    <div class="__webkit-scrollbar" :style="scrollBarStyle">
      <div
        class="__webkit-scrollbar-track"
        :style="{
          height: scrollBarHeight + '%',
          top: trackPosition + '%',
          ...trackStyle
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contentStyle', 'scrollBarStyle', 'trackStyle'],
  name: 'ScrollbarAutoHide',
  data() {
    return {
      scrollBarHeight: 0,
      trackPosition: 0
    }
  },
  mounted() {
    const scrollBox = document.querySelector('.scrollbar-auto-hide')
    let height = scrollBox.offsetHeight
    const scrollContent = scrollBox.querySelector(
      '.scrollbar-auto-hide__content'
    )
    let scrollHeight = scrollContent.scrollHeight
    this.scrollBarHeight = parseInt((height * 100) / scrollHeight)
  },
  methods: {
    scrollEvent(event) {
      const scrollContent = event.target
      this.trackPosition = parseInt(
        (scrollContent.scrollTop * 100) /
          (scrollContent.scrollHeight - this.scrollBarHeight)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}

.scrollbar-auto-hide {
  position: relative;

  &:hover {
    .__webkit-scrollbar {
      opacity: 1;
    }
  }

  &__content {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  .__webkit-scrollbar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 10px;
    background: rgba(0, 0, 0, 0.3);
    transition: ease 0.5s;
    opacity: 0;
    &-track {
      width: 100%;
      height: 100px;
      background-color: #dadada;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
