<template>
  <div id="mobile-header">

    <mt-header fixed :title="$route.meta.title">
      <img v-if="type == 'main'" slot="left" class="logo" src="static/logo_header.png" data-rjs="3" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
      <mt-button v-if="type == 'more'" slot="left" class="back" icon="back" @click="back">返回</mt-button>
      <mt-button slot="right" @click="opened = !opened" @blur.native="opened = false">
        <i slot="icon" class="icon-menu iconfont"></i>
      </mt-button>
    </mt-header>

    <nav :class="{opened}">
      <router-link :to="{name: 'about-us'}">关于我们</router-link>
      <router-link :to="{name: 'artists-and-works'}">参展艺术家·作品</router-link>
      <router-link :to="{name: 'reports'}">展览报道</router-link>
      <router-link :to="{name: 'must-know'}">观展须知</router-link>
    </nav>    
  </div>

</template>

<script>
  export default {
    data() {
      return {
        opened: false
      }
    },
    props: ['type'],
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #mobile-header {
    .logo {
      width: 4.2rem;
      height: 2.4rem;
      margin-top: 0.3rem;
      margin-left: 0.2rem;
    }
    .back {
      padding-left: 1rem;
    }
    .icon-menu {
      font-size: 1.8rem;
      line-height: 1;
      margin-right: 1rem;
    }
    nav {
      $odd-margin: 16vw;
      $even-margin: 10vw;
      $border-color: rgba(100, 100, 100, 0.5);
      position: fixed;
      top: $header-height;
      left: 0;
      display: flex;
      flex-wrap: wrap;
      padding: 0.5rem 0;
      background-color: $header-backgroundColor;
      border-top: 1px solid $border-color;
      transform: scaleY(0);
      transform-origin: top;
      transition: 0.5s;
      z-index: 99999;
      &.opened {
        transform: scaleY(1);
      }
      a {
        $height: 3rem;
        color: rgb(255, 255, 255);
        font-size: 0.9rem;
        line-height: $height;
        letter-spacing: 0.2rem;
        box-sizing: border-box;
        width: (100vw - $odd-margin -$even-margin) / 2;
        height: $height;
        &:nth-child(odd) {
          margin-right: $odd-margin;
          padding-left: 1.5rem;
        }
        &:nth-child(even) {
          margin-right: $even-margin;
        }
        &:nth-last-child(n + 3) {
          border-bottom: 1px solid $border-color;
        }
      }
    }
  }
</style>
