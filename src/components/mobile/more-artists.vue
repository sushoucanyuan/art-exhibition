<template>
  <back id="more-artists">

    <div class="mobile-info">
      <div class="artist" v-for="(item, index) in artists" :key="index">
        <img class="artist-img" :src="'static/artists/' + item.src">
        <div class="artist-info">
          <div class="artist-name">{{item.name}}</div>
          <div class="artist-description">{{item.description}}</div>
        </div>
      </div>
    </div>

  </back>
</template>

<script>
  import { artists } from '@/assets/data/artists'
  import back from '@/components/mobile/back.vue'

  export default {
    data() {
      return {
        artists
      }
    },
    components: {
      back
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #more-artists {
    .mobile-info {
      padding-top: $more-paddingTop;
      > .artist {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;
        > .artist-img {
          width: 40%;
        }
        > .artist-info {
          align-self: flex-start;
          width: 55%;
          > .artist-name {
            font-size: 0.8rem;
            font-weight: bold;
            line-height: 1.5rem;
            letter-spacing: 0.15rem;
          }
          > .artist-description {
            opacity: 0.8;
            font-size: 0.7rem;
            line-height: 1.2rem;
            letter-spacing: 0.05rem;
          }
        }
      }
    }
  }
</style>
