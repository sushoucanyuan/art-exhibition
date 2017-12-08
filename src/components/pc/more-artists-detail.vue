<template>
  <div id="more-artists-detail">

    <div class="link-container">

      <div class="link">
        <router-link class="pc-link" :to="{name: 'artists-and-works'}">参展艺术家·作品</router-link>
        &nbsp;&gt;&nbsp;
        <router-link class="pc-link" :to="{name: 'more-artists'}">更多艺术家</router-link>        
        &nbsp;&gt;&nbsp;
        <router-link class="pc-link" :to="{name: 'more-artists-detail', params:{id}}">{{name}}</router-link>  
      </div>

    </div>

    <swiper class="artist" ref="mySwiper" :options="options">
      <swiper-slide v-for="(item, index) in artists" :key="index">
        <div class="first">
          <div>
            <div>
              <p >{{item.name}}</p>
              <p >{{item.work}}</p>            
            </div>
            <img :src="'static/artists-detail/' + item.src">            
          </div>
        </div>
        <div class="second">
          <div class="artist-info">
            <h6>{{item.h}}</h6>
            <p v-for="(item, index) in item.p" :key="index">{{item}}</p>
          </div>
          <img :src="'static/artists-detail/' + item.img">
        </div>
      </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { artists } from '@/assets/data/artists-detail'

  export default {
    props: ['id'],
    data() {
      return {
        artists,
        options: {
          loop: true,
          initialSlide: 0,
          autoplayDisableOnInteraction: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      name() {
        return this.artists[this.index].name
      },
      index() {
        // 需要判断存不存在
        if (this.$refs.mySwiper) return this.$refs.mySwiper.swiper.realIndex
        else return 0
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.swiper.slideTo(vm.id, 0, false)
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #more-artists-detail {
    > .link-container {
      box-sizing: border-box;
      width: $main-width;
      margin: 0 auto;
      padding: 0 $mes-padding 0;
      > .link {
        cursor: pointer;
        margin: 30px 0 60px 10px;
        .pc-link {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
    > .artist {
      $button: 75px;
      @mixin main {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: $main-width;
        margin: 0 auto;
        padding: 0 $mes-padding + 40px 0;
      }
      .swiper-button-prev {
        left: $button;
      }
      .swiper-button-next {
        right: $button;
      }
      .first {
        box-sizing: border-box;
        height: 200px;
        padding: 20px 0;
        background-color: $footer-backgroundColor;
        > div {
          @include main;
          height: 100%;
          > div > p {
            font-size: 36px;
            line-height: 68px;
            letter-spacing: 5px;
          }
          > img {
            $side-length: 160px;
            align-self: center;
            width: $side-length;
            height: $side-length;
          }
        }
      }
      .second {
        @include main;
        padding-top: 30px;
        padding-bottom: 50px;
        > .artist-info {
          width: 45%;
          font-size: 16px;
          line-height: 35px;
          letter-spacing: 3px;
          > h6 {
            margin-bottom: 10px;
          }
        }
        > img {
          align-self: center;
          max-width: 52%;
        }
      }
    }
  }
</style>
