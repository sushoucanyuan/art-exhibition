<template>
  <div id="about-us">

    <img src="static/about_us/header.png">

    <div class="info mobile-info">

      <mt-navbar class="info-navbar" v-model="selected">
        <mt-tab-item class="navbar-item" id="1">关于双年展</mt-tab-item>
        <mt-tab-item class="navbar-item" id="2">征稿启事</mt-tab-item>
        <mt-tab-item class="navbar-item" id="3">LOGO设计</mt-tab-item>
        <mt-tab-item class="navbar-item" id="4">艺术委员会</mt-tab-item>
      </mt-navbar>

      <mt-tab-container class="info-container" v-model="selected">
        <mt-tab-container-item id="1">
          <h4>双年展是什么？</h4>
          <p>xxxxx</p>
          <p>sssss</p>
          <img src="static/about_us/about_us.png">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '1'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #about-us {
    > img {
      display: block;
      width: 100%;
      height: $swiper-height;
    }
    > .info {
      > .info-navbar {
        padding: 1.4rem 0 2rem;
        .navbar-item {
          padding: 0.75rem 0;
          &.is-selected {
            font-weight: bold;
            border-bottom: 0.2rem solid $link-active-color;
            color: $link-active-color;
          }
        }
      }
      > .info-container {
        h4,
        p {
          margin-bottom: 0.8rem;
        }
        h4{
          font-weight: normal;
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>
