<template>
  <header id="app-header">
    <img class="logo" src="../../../static/logo.png" alt="东湖雕塑生态双年展">
    <nav>
      <router-link to="/about-us">关于我们</router-link>
      <router-link to="/artists-and-works">参展艺术家·作品</router-link>
      <router-link to="/reports">展览报道</router-link>
      <router-link to="/need-to-know">观展须知</router-link>
    </nav>
    <input class="search" type="text" placeholder="查询信息">
  </header>
</template>

<script>
  export default {
    computed: {
      title: function () {
        switch (this.$route.path) {
          case '/index': return '首页'
          case '/about-us': return '关于我们'
          case '/artists-and-works': return '参展艺术家·作品'
          case '/reports': return '展览报道'
          case '/need-to-know': return '观展须知'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/theme.scss";

  #app-header {
    letter-spacing: 0.2rem;
    height: $mobile-header-height;
    background-color: $base-color;
    z-index: 99999;
    .image{
      $image-heder: 2.3rem;
      width: 4.2rem;
      height: $image-heder;
      margin: ($mobile-header-height - $image-heder) / 2  0;
      margin-left: 0.1rem;      
    }
    .button{
      margin: 0 1.5rem 0 0.5rem;
    }
  }

  // #app-header {
  //   $header-height: 80px;
  //   text-align: right;
  //   position: relative;
  //   height: $header-height;
  //   background-color: rgb(248, 248, 248);
  //   > .logo {
  //     height: 100%;
  //     position: absolute;
  //     left: 50px;
  //     top: 0;
  //   }
  //   > nav {
  //     display: inline-block;
  //     > a {
  //       $link-height: 20px;
  //       color: rgb(12, 12, 12);
  //       font-size: 12px;
  //       letter-spacing: 2px;
  //       position: relative;
  //       display: inline-block;
  //       height: $link-height;
  //       margin: ($header-height - $link-height)/2 0;
  //       margin-right: 30px;
  //       transition: 0.4s;
  //       &.router-link-active {
  //         color: rgb(255, 65, 45);
  //       }
  //       &::after {
  //         content: "";
  //         position: absolute;
  //         left: 0;
  //         right: 0;
  //         bottom: 0;
  //         display: block;
  //         width: 0;
  //         height: 2px;
  //         margin: auto;
  //         background-color: $base-color;
  //         transition: 0.5s;
  //       }
  //       &:hover::after {
  //         width: 100%;
  //       }
  //     }
  //   }
  //   .search {
  //     line-height: 30px;
  //     width: 200px;
  //     margin-right: 40px;
  //   }
  // }
</style>
