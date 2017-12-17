<template>
  <div id="mobile-header">

    <mt-header fixed :title="$route.meta.title">
      <img v-if="type == 'main'" slot="left" class="logo" src="static/logo_header.png" data-rjs="3" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
      <mt-button v-if="type == 'more'" slot="left" class="back" icon="back" @click="back">返回</mt-button>
      <button class="button" slot="right" ref="btn" @click="opened = !opened" @blur="opened = false">
        <i slot="icon" class="icon-menu iconfont"></i>
      </button>
    </mt-header>

    <nav :class="{opened}">
      <div class="links">
        <router-link :class="{cn: lang}" :to="{name: 'about-us'}">{{$t('m.aboutUs')}}</router-link>
        <router-link :class="{cn: lang}" :to="{name: 'artists-and-works'}">{{$t('m.artistCollection')}}</router-link>
        <router-link :class="{cn: lang}" :to="{name: 'reports'}">{{$t('m.news')}}</router-link>
        <router-link :class="{cn: lang}" :to="{name: 'must-know'}">{{$t('m.notes')}}</router-link>        
      </div>
      <div class="translate" @click="changeLang">
        <img src="static/translate.png" data-rjs="3" />
        <span>翻译 / TRANSLATE</span>
      </div>
    </nav>    
  </div>

</template>

<script>
  export default {
    data() {
      return {
        opened: false,
        lang: true
      }
    },
    props: ['type', 'back'],
    watch: {
      lang() {
        this.$i18n.locale = this.lang //关键语句
      }
    },
    methods: {
      changeLang() {
        this.lang = !this.lang
        this.$refs.btn.focus()
        this.opened = true
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #mobile-header {
    .logo {
      width: 4.2rem;
      height: 2.4rem;
      margin-top: 0.3rem;
      margin-left: 0.6rem;
    }
    .back {
      padding-left: 1rem;
    }
    .button{
      color: #fff;
      border: none;
      background-color: transparent;
    }
    .icon-menu {
      font-size: 1.8rem;
      line-height: 1;
      margin-right: 1rem;
    }
    nav {
      $odd-margin: 7vw;
      $even-margin: 6vw;
      $odd-margin_cn: 15vw;
      $even-margin_cn: 12vw;
      $leave: 100vw - $odd-margin -$even-margin;
      $leave_cn: 100vw - $odd-margin_cn -$even-margin_cn;
      $border-color: rgba(100, 100, 100, 0.5);
      position: fixed;
      top: $header-height;
      left: 0;
      padding: 0.5rem 0;
      background-color: $header-backgroundColor;
      border-top: 1px solid $border-color;
      transform: scaleY(0);
      transform-origin: top;
      transition: 0.4s;
      z-index: 99999;
      &.opened {
        transform: scaleY(1);
      }
      > .links {
        display: flex;
        flex-wrap: wrap;
        a {
          $height: 4.8rem;
          color: rgb(255, 255, 255);
          font-size: 1.04rem;
          font-weight: bold;
          line-height: $height;
          letter-spacing: 0.15rem;
          box-sizing: border-box;
          height: $height;
          border-bottom: 1px solid $border-color;          
          &:nth-child(odd) {
            width: 0.35 * $leave;
            margin-right: $odd-margin;
            padding-left: 1.5rem;
          }
          &:nth-child(even) {          
            width: 0.65 * $leave;            
            margin-right: $even-margin;
          }
          &.cn:nth-child(odd) {
            width: 0.5 * $leave_cn;
            margin-right: $odd-margin_cn;            
          }
          &.cn:nth-child(even) {
            width: 0.5 * $leave_cn;
            margin-right: $even-margin_cn;            
          }
        }
      }
      > .translate {
        $height: 6rem;
        color: rgb(255, 255, 255);   
        text-align: left;
        letter-spacing: 0.1rem;
        margin: 1.8rem 1.8rem 2.5rem 1.5rem;   
        > img{
          vertical-align: bottom;
          height: 1.2rem;
          margin-bottom: -0.1rem;
        }
        > span{
          display: inline-block;
          height: 1.2rem;          
          vertical-align: bottom;          
        }
      }
    }
  }
</style>
