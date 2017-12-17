<template>
  <div id="index">

    <swiper class="swiper" :options="imgs_swiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="'static/index/' + item" data-rjs="3">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="info">

      <div class="artist">
        <h4>艺术家</h4>
        <p>ARTISTS</p>
        <swiper :options="artists_swiper">
          <swiper-slide v-for="(item, index) in artists" :key="item.id" @click.native="$router.push({name: 'more-artists-detail', params:{id: item.id}})">
            <img class="artist-img" :src="item.picurl" data-rjs="3">
            <div>
              <div class="artist-artist">
                <span>{{item.name}}</span>
              </div>
              <div class="artist-description">{{item.info | climp(32)}}</div>                       
            </div>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="news">
        <div class="news-main">
          <h4 class="news-title">{{firstNews.title}}</h4>          
          <div class="news-info">
            <div class="news-content">{{firstNews.info | climp(32)}}</div>
            <img v-if="firstNews.picurl" class="news-img" :src="firstNews.picurl" data-rjs="3">          
            <img v-else class="news-img" src="/static/index/news.png" data-rjs="3">                 
          </div>
          <button class="news-link" @click="$router.push({name: 'reports-detail', params: {type: 1, id: firstNews.id}})">查看详情</button>                      
        </div>
      </div>

      <div class="movie">
        <h4>影像视频</h4>
        <p>MOVIE PHOTO</p>
        <swiper :options="movies_swiper">
          <swiper-slide class="movie-container" v-for="(item, index) in movies" :key="index">
            <video class="movie-video" :src="item.src" controls loop preload="auto"></video>
            <div class="movie-name">{{item.name}}</div>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

    </div>

  </div>
</template>

<script>
  import climp from '@/mixins/climp'
  import { imgs, movies } from '@/common/data/index'
  import { getTopAuthorList, getTopNewsList } from '@/api'

  export default {
    mixins: [climp],
    data() {
      return {
        imgs,
        artists: [],
        news: [],
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
        },
        movies_swiper: {
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
    computed: {
      firstNews() {
        if (this.news[0]) return this.news[0]
        else return {
          id: '',
          title: '...',
          info: '...',
          picurl: ''
        }
      },
      newsList() {
        return this.news.slice(1)
      }
    },
    methods: {
      getTopAuthorList,
      getTopNewsList
    },
    beforeMount() {
      this.getTopAuthorList().then(artists => {
        this.artists = artists
      })
      this.getTopNewsList().then(news => {
        this.news = news
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mixins.scss";
  @import "../../assets/scss/mobile/theme.scss";

  #index {
    > .swiper .swiper-img {
      width: 100%;
      height: $swiper-height;
    }
    > .info {
      padding-left: $main-padding;
      padding-right: $main-padding;
      > div {
        padding-top: 1.4rem;
        h4 {
          font-size: 0.9rem;
          &.news-title {
            text-align: center;
          }
        }
        p {
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
          @include overflow(3);
          color: $content-color;
          font-size: 0.5rem;
          line-height: 1rem;
          max-height: 3rem;
          overflow: hidden;
        }
      }
      > .movie {
        overflow: hidden;
        .swiper-wrapper {
          box-sizing: border-box;
          position: relative;
          left: -$main-padding;
          width: 100vw;
          padding: 0 $main-padding;
          height: 15rem;
        }
        .movie-container {
          .movie-video {
            display: block;
            width: 100%;
            height: 12rem;
          }
          .movie-name {
            color: $title-color;
            font-weight: bold;
            font-family: bold;
            line-height: 2rem;
            text-align: center;
            letter-spacing: 0.2rem;
            margin-top: 1rem;
          }
        }
      }
      > .news {
        > .news-main {
          > .news-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1.2rem;
            .news-content {
              color: $content-color;
              font-size: 0.8rem;
              line-height: 1.2rem;
              letter-spacing: 0.1rem;
              max-height: 3.6rem;
              padding-left: 0.4rem;
              padding-right: 0.4rem;
              overflow: hidden;
            }
            > .news-img {
              width: 8rem;
              border-radius: 0.8rem;
              box-shadow: 3px 3px 10px 3px $shadow-color;
            }
          }
          > .news-link {
            $height: 2.4rem;
            color: #fff;
            letter-spacing: 0.2rem;
            align-self: flex-start;
            line-height: $height;
            width: 100%;
            margin-top: 1.5rem;
            border: none;
            border-radius: $height/2;
            background-color: rgba(7, 171, 133, 1);
            box-shadow: 0px 6px 8px 2px $shadow-color;
            transition: 0.2s;
            &:hover {
              background-color: rgba(7, 171, 133, 0.8);
            }
          }
        }
      }
    }
  }
</style>
