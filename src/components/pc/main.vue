<template>
  <div id="main">

    <header>
      <img class="logo" src="static/logo_header.png" alt="东湖雕塑生态双年展">
      <nav>
        <router-link to="/about-us">关于我们</router-link>
        <router-link to="/artists-and-works">参展艺术家·作品</router-link>
        <router-link to="/reports">展览报道</router-link>
        <router-link to="/need-to-know">观展须知</router-link>
      </nav>
      <input class="search" type="text" placeholder="查询信息">
    </header>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  header {
    $header-height: 80px;
    text-align: right;
    position: relative;
    height: $header-height;
    background-color: rgb(248, 248, 248);
    > .logo {
      height: 100%;
      position: absolute;
      left: 50px;
      top: 0;
    }
    > nav {
      display: inline-block;
      > a {
        $link-height: 20px;
        color: rgb(12, 12, 12);
        font-size: 12px;
        letter-spacing: 2px;
        position: relative;
        display: inline-block;
        height: $link-height;
        margin: ($header-height - $link-height)/2 0;
        margin-right: 30px;
        transition: 0.4s;
        &.router-link-active {
          color: $link-active-color;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
          width: 0;
          height: 2px;
          margin: auto;
          background-color: $button-color;
          transition: 0.5s;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    .search {
      line-height: 30px;
      width: 200px;
      margin-right: 40px;
    }
  }
</style>
