<template>
  <div id="main">

    <header>
      <img class="logo" src="static/logo_header.png" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
      <nav>
        <router-link class="pc-link" :to="{name: 'about-us'}" active-class="pc-link-active">关于我们</router-link>
        <router-link class="pc-link" :to="{name: 'artists-and-works'}" active-class="pc-link-active">参展艺术家·作品</router-link>
        <router-link class="pc-link" :to="{name: 'reports'}" active-class="pc-link-active">展览报道</router-link>
        <router-link class="pc-link" :to="{name: 'must-know'}" active-class="pc-link-active">观展须知</router-link>
      </nav>
      <div class="pc-search">
        <input type="text" placeholder="查询信息">      
      </div>
    </header>

    <main>
      <keep-alive>
        <transition>
          <router-view/>
        </transition>
      </keep-alive>
    </main>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #main{
    > header {
      text-align: right;
      position: relative;
      height: $header-height;
      min-width: $main-width;
      background-color: #f9f9f9;
      > .logo {
        cursor: pointer;
        width: 140px;
        height: 100%;
        position: absolute;
        left: 40px;
        top: 0;
      }
      > nav {
        display: inline-block;
        > a {
          $link-height: 20px;
          height: $link-height;
          margin: ($header-height - $link-height)/2 0;
          margin-right: 36px;
        }
      }
      .pc-search {
        line-height: 30px;
        display: inline-block;
        width: 280px;
        margin-right: 40px;
      }
    }
    > main{
      min-width: $main-width;
    }
    > footer{
      min-width: $main-width;      
    }
  }
</style>
