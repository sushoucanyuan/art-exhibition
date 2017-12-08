<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    // 全局轮播组件自定义按钮样式
    .swiper-pagination-bullet-custom {
      @mixin swiper-pagination-bullet-color($color) {
        border-color: $color;
        &.swiper-pagination-bullet-active {
          background-color: $color;
        }
      }
      $side-length: 0.6rem;
      display: inline-block;
      box-sizing: border-box;
      width: $side-length;
      height: $side-length;
      margin: 0 0.4rem;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      background-color: transparent;
      &.header-pagination {
        @include swiper-pagination-bullet-color(#fff);
      }
      &.info-pagination {
        @include swiper-pagination-bullet-color(#111);
      }
    }
  }
</style>
