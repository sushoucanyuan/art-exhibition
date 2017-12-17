<template>
  <div id="mobile">
    <keep-alive :exclude="['more-artists-detail' ,'more-works-detail' ,'reports-detail']">
      <router-view :key="key"/>
    </keep-alive>
  </div>
</template>

<script>
  import '@/mobile.js'

  export default {
    name: 'mobile',
    computed: {
      key() {
        // return this.$route.path.replace(/\//g, '_')
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/mobile/theme.scss";

  #mobile {
    // 覆盖头部组件样式
    .mint-header {
      font-size: 1.2rem;
      letter-spacing: 0.15rem;
      height: $header-height;
      background-color: $header-backgroundColor;
      z-index: 99999;
    }

    // 主体样式
    .mobile-main {
      box-sizing: border-box;
      height: 100vh;
      padding-top: $header-height;
      overflow-y: auto;
    }

    // 信息样式
    .mobile-info {
      padding: 0 $main-padding 2.8rem;
    }

    // 搜索框样式
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
