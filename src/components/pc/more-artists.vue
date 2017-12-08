<template>
  <div id="more-artists">

    <div class="pc-info">

      <div class="link">
        <router-link class="pc-link" :to="{name: 'artists-and-works'}">参展艺术家·作品</router-link>
        &nbsp;&gt;&nbsp;
        <router-link class="pc-link" :to="{name: 'more-artists'}">更多艺术家</router-link>        
      </div>

      <div class="artist" v-for="(item, index) in artists" :key="index">
        <img class="artist-img" :src="'static/artists/' + item.src">
        <div class="artist-info">
          <div class="artist-name pc-name">{{item.name}}</div>
          <div class="artist-description">{{item.description}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { artists } from '@/assets/data/artists'

  export default {
    data() {
      return {
        artists
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #more-artists {
    > .pc-info {
      padding-left: $mes-padding;
      padding-right: $mes-padding;
      > .link {
        cursor: pointer;
        margin: 30px 0 60px 10px;
        .pc-link {
          font-size: 14px;
          line-height: 24px;
        }
      }
      > .artist {
        $img-width: 34%;
        $info-width: 60%;
        &:nth-last-child(n+2){
          margin-bottom: 50px;
        }
        > .artist-img {
          vertical-align: top;
          display: inline-block;
          width: $img-width;
          margin-right: 99% - $img-width - $info-width;
        }
        > .artist-info {
          vertical-align: top;
          display: inline-block;
          width: $info-width;
          > .artist-name {
            color: $title-color;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }
          > .artist-description {
            color: $content-color;            
            font-size: 16px;
            line-height: 2;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
</style>
