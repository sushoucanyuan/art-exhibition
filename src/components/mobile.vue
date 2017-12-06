<template>
  <div id="mobile">
    <keep-alive>
      <transition>
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import '@/mobile.js'

  export default {
    name: 'mobile'
  }
</script>

<style lang="scss">
  @import "../assets/scss/theme_mobile.scss";

  #mobile {
    // 覆盖头部组件样式
    .mint-header {
      font-size: 1rem;
      letter-spacing: 0.15rem;
      height: $header-height;
      background-color: $header-backgroundColor;
      z-index: 99999;
    }

    // 全局主体样式
    .mobile-main {
      box-sizing: border-box;
      height: 100vh;
      padding-top: $header-height;
      overflow-y: auto;
    }

    // 全局信息样式
    .mobile-info {
      padding: 0 $main-padding 2.8rem;
    }

    // 全局搜索框样式
    .mobile-search {
      $side-length: 2.3rem;
      position: relative;
      display: block;
      &::after {
        content: "\e6ac";
        font-family: "iconfont";
        font-size: 1rem;
        line-height: $side-length;
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        width: $side-length;
        height: $side-length;
        display: block;
      }
      > input {
        line-height: $side-length;
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0 $side-length 0 0.8rem;
        border: none;
        background-color: rgb(233, 233, 233);
      }
    }
  }
</style>
