<template>
  <div id="index">

    <swiper class="swiper" :options="imgs_swiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="'static/index/' + item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="info pc-info">

      <div class="artist">
        <h4>艺术家</h4>
        <p>ARTISTS</p>
        <swiper :options="artists_swiper">
          <swiper-slide v-for="(item, index) in artists" :key="index">
            <img class="artist-img" :src="'static/index/' + item.src">
            <div class="artist-info">
              <div class="artist-artist">
                <span>{{item.name}}</span>
                <span>{{item.date}}</span>
              </div>
              <p class="artist-description" v-for="(item,index) in item.descriptions" :key="index">{{item}}</p>              
              <router-link class="artist-link" :to="{name: 'more-artists-detail', params: {index}}">艺术作品&gt;</router-link>
            </div>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="movie">
        <h4>影像视频</h4>
        <p>MOVIE PHOTO</p>
        <swiper :options="works_swiper">
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
        artists_swiper: {
          loop: true,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: '12%',
          pagination: {
            el: '.info-swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom info-pagination"></span>`
            }
          }
        },
        works_swiper: {
          loop: true,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: '9%',
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
  @import "../../assets/scss/theme_pc.scss";

  #index {
    > .swiper {
      width: 100%;
      .swiper-img {
        display: block;
        width: 100%;
      }
    }
    > .info {
      > div {
        margin-top: 78px;
        > h4 {
          color: $title-color;          
          font-size: 35px;
        }
        > p {
          color: $content-color;
          margin: 7px 0 45px;
          padding-left: 2px;
        }
        .info-swiper-pagination {
          text-align: center;
        }
      }
      > .artist {
        .artist-img {
          width: 100%;
          height: 260px;
        }
        .artist-artist {
          color: $title-color;
          font-size: 20px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        .artist-description {
          color: $main-width;
          font-size: 14px;
          line-height: 30px;
        }
        .artist-link{
          color: $link-color;
          display: inline-block;
          margin: 20px 0 26px;
        }
      }
      > .movie{
        .movie-container {
          position: relative;
          margin-bottom: 40px;          
          .movie-img {
            width: 100%;
            height: 300px;
          }
          .movie-btn {
            $side-length: 90px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: $side-length;
            height: $side-length;
            margin: auto;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
