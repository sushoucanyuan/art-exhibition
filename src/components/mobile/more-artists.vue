<template>
  <back :back="back" id="more-artists">

    <div class="main-container">
      <div class="artist" v-for="item in artists" :key="item.id">
         <div class="artist-img">
          <img v-lazy="item.picurl">
        </div>
        <div class="artist-info">
          <div class="artist-name">{{item.name}}</div>
          <div class="artist-description">{{item.info}}</div>
        </div>
      </div>
    </div>

  </back>
</template>

<script>
  import { getArtists } from '@/api'
  import back from '@/components/mobile/back.vue'

  export default {
    data() {
      return {
        artists: []
      }
    },
    components: {
      back
    },
    methods: {
      getArtists,
      back(){
        this.$router.push({name: 'artists-and-works'})
      }
    },
    beforeMount() {
      this.getArtists().then(artists => {
        this.artists = artists
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #more-artists {
    .main-container {
      padding-top: 2rem;
      padding-left: $main-padding;
      padding-right: $main-padding;
      > .artist {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;
        > .artist-img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          background-color: $img-backgroundColor;
          > img{
            display: block;
            width: 100%;
            height: 100%;
            &[lazy="error"],
            &[lazy="loading"] {
              display: inline-block;
              width: 2rem;
              height: 2rem;
              margin: calc((100% - 2rem) /2) 0;
            }
          }
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
