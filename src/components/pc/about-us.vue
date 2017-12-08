<template>
  <div id="about-us">

    <img src="static/about_us/header.png">

    <div class="info pc-info">

      <div class="nav">
        <div v-for="(item, index) in links" :key="index">
          <a class="pc-link" :class="{'pc-link-active': linkActive == index}" @click="linkActive = index">{{item}}</a>
        </div>
      </div>

      <div class="mes">

        <div v-if="linkActive == '0'">
          <h4>双年展是什么？</h4>
          <p>xxxxx</p>
          <p>sssss</p>
          <img src="static/about_us/about_us.png">
        </div>
        <div v-if="linkActive == '1'">
        </div>        
        <div v-if="linkActive == '2'">
        </div>        
        <div v-if="linkActive == '3'">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: ['关于双年展', '征稿启示', 'LOGO设计', '艺术委员会'],
        linkActive: '0'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #about-us {
    > img {
      display: block;
      width: 100%;
    }
    > .info {
      position: relative;
      margin-top: 50px;
      > .nav {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        width: $side-width;
        padding-left: 60px;
        > div > a {
          $height: 30px;
          line-height: $height;
          height: $height;
          margin: 5px 0;
          &.pc-link-active {
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
      > .mes {
        width: $mes-width;
        margin: 0 auto;
        > div {
          h4,
          p {
            margin-bottom: 18px;
          }
          h4 {
            color: $title-color;
            letter-spacing: 1px;
          }
          p {
            color: $content-color;
            line-height: 20px;
          }
          > img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
</style>
