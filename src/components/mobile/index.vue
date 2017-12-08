<template>
  <div id="index">

    <swiper class="swiper" :options="imgs_swiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="'static/index/' + item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="info mobile-info">

      <div class="artist">
        <h4>艺术家</h4>
        <p>ARTISTS</p>
        <swiper :options="infos_swiper">
          <swiper-slide v-for="(item, index) in artists" :key="index">
            <img class="artist-img" :src="'static/index/' + item.src">
            <div>
              <div class="artist-artist">
                <span>{{item.name}}</span>
                <span>{{item.date}}</span>
              </div>
              <p class="artist-description" v-for="(item,index) in item.descriptions" :key="index">{{item}}</p>              
            </div>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="movie">
        <h4>影像视频</h4>
        <p>MOVIE PHOTO</p>
        <swiper :options="infos_swiper">
          <swiper-slide class="movie-container" v-for="(item, index) in movies" :key="index">
            <img class="movie-img" :src="'static/index/' + item">
            <img class="movie-btn" src="../../assets/img/play_btn.png">
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { imgs, artists, movies } from '@/assets/data/index'

  export default {
    data() {
      return {
        imgs,
        artists,
        movies,
        imgs_swiper: {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          autoplayDisableOnInteraction: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom header-pagination"></span>`
            }
          }
        },
        infos_swiper: {
          loop: true,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: '8%',
          pagination: {
            el: '.info-swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom info-pagination"></span>`
            }
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #index {
    > .swiper .swiper-img {
      width: 100%;
      height: $swiper-height;
    }
    > .info {
      > div {
        padding-top: 1.2rem;
        > h4 {
          font-size: 0.8rem;
        }
        > p {
          font-size: 0.6rem;
          margin-bottom: 1rem;
          padding-left: 0.1rem;
        }
        .info-swiper-pagination {
          text-align: center;
        }
      }
      > .artist {
        .artist-img {
          width: 100%;
          height: 9rem;
        }
        .artist-artist {
          font-size: 0.75rem;
          font-weight: bold;
          line-height: 2rem;
          display: flex;
          justify-content: space-between;
        }
        .artist-description {
          font-size: 0.5rem;
          line-height: 1rem;
        }
      }
      > .movie {
        .movie-container {
          position: relative;
          .movie-img {
            width: 100%;
            height: 6.8rem;
          }
          .movie-btn {
            $side-length: 1.8rem;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: $side-length;
            height: $side-length;
            margin: auto;
          }
        }
      }
    }
  }
</style>
