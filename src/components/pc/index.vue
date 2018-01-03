<template>
  <div id="index">

    <swiper class="swiper" :options="imgs_swiper">
      <swiper-slide v-for="item in banners" :key="item.id">
        <img class="swiper-img" :src="item.picurl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="info">

      <div class="artist">
        <h4 class="title">艺术家</h4>
        <p class="subtitle">ARTISTS</p>
        <swiper ref="artists_swiper" :options="artists_swiper">
          <swiper-slide v-for="item in artists" :key="item.id">
            <div style="position: relative;">
              <img class="artist-img" :src="item.picurl"/>
            </div>
            <div>
              <div class="artist-name">
                <span class="pc-name" @click="$router.push({name: 'more-artists-detail', params:{id: item.id}})">{{item.name}}</span>
              </div>
              <p class="artist-brief">{{item.info | climp(44)}}</p>              
              <router-link class="artist-link" :to="{name: 'more-artists-detail', params: {id: item.id}}">艺术作品 &gt;</router-link>
            </div>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="news">
        <div class="news-main">
          <div class="news-info">
            <h4 class="title">{{firstNews.title}}</h4>
            <p class="news-content">{{firstNews.info | climp(70)}}</p>              
            <button class="news-link" @click="$router.push({name: 'reports-detail', params: {type: 1, id: firstNews.id}})">查看详情</button>            
          </div>
          <img v-if="firstNews.picurl" class="news-img" :src="firstNews.picurl">          
          <img v-else class="news-img" src="/static/index/news.png">
        </div>
        <div class="news-latest">
          <div v-for="item in newsList" :key="item.id">
            <h4 class="news-title">
              <span class="pc-name" @click="$router.push({name:'reports-detail', params: {type: 1, id: item.id}})">{{item.title}}</span>
            </h4>
            <p class="news-content">{{item.info | climp(44)}}</p>            
          </div>
        </div>
      </div>

      <div class="movie">
        <h4 class="title">影像视频</h4>
        <p class="subtitle">MOVIE PHOTO</p>
        <swiper :options="works_swiper">
          <swiper-slide v-for="(item, index) in movies" :key="index">
            <video class="movie-video" :src="item.src" controls loop></video>
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
  import { getTopBannerList, getTopAuthorList, getTopNewsList } from '@/api'

  export default {
    mixins: [climp],
    data() {
      return {
        imgs,
        movies,
        banners: [],
        artists: [],
        news: [],
        imgs_swiper: {
        //  loop: true,
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
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: '8%',
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
      getTopBannerList,
      getTopAuthorList,
      getTopNewsList
    },
    beforeMount() {
      this.getTopBannerList().then(banners => {
        this.banners = banners
      })
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
  @import "../../assets/scss/pc/theme.scss";

  #index {
    > .swiper {
      width: 100%;
      min-height: 500px;
      .swiper-img {
        display: block;
        width: 100%;
      }
    }
    > .info {
      box-sizing: border-box;
      width: $main-width;
      padding: 0 $main-padding;
      margin: 0 auto;
      > div {
        margin-top: 70px;
        .title {
          color: $title-color;
          font-size: 35px;
        }
        .subtitle {
          color: $content-color;
          margin: 7px 0 45px;
          padding-left: 2px;
        }
        .info-swiper-pagination {
          text-align: center;
          margin-top: 40px;
        }
      }
      > .artist {
        .artist-img {
          display: block;
          width: 100%;
          height: 260px;
        }
        .artist-name {
          color: $title-color;
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 2px;
          margin: 10px 0;
        }
        .artist-brief {
          $line-height: 25px;
          color: $content-color;
          font-size: 14px;
          line-height: $line-height;
          letter-spacing: 1px;
          height: 3 * $line-height;
          overflow: hidden;
        }
        .artist-link {
          color: $link-color;
          display: inline-block;
          margin-top: 20px;
        }
      }
      > .news {
        > .news-main {
          display: flex;
          justify-content: space-between;
          padding-bottom: 80px;
          border-bottom: 1px solid $content-color;
          > .news-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > .news-link {
              $height: 40px;
              cursor: pointer;
              color: #fff;
              letter-spacing: 2px;
              align-self: flex-start;
              line-height: $height;
              height: $height;
              padding: 0 60px;
              border: none;
              border-radius: $height/2;
              background-color: rgba(7, 171, 133, 1);
              box-shadow: 0px 10px 12px 2px $shadow-color;
              transition: 0.2s;
              &:hover {
                background-color: rgba(7, 171, 133, 0.8);
              }
            }
            .news-content {
              color: $content-color;
              font-size: 16px;
              line-height: 30px;
              letter-spacing: 1px;
              max-height: 90px;
              padding-left: 5px;
              padding-right: 90px;
              overflow: hidden;
            }
          }
          > .news-img {
            align-self: flex-start;
            width: 430px;
            margin-top: 10px;
            margin-left: 40px;
            border-radius: 10px;
            box-shadow: 5px 5px 16px 5px $shadow-color;
          }
        }
        > .news-latest {
          display: flex;
          justify-content: space-between;
          > div {
            $line-height: 20px;
            font-size: 15px;
            width: 280px;
            margin-top: 20px;
            > .news-title {
              color: $title-color;
              line-height: $line-height;
              letter-spacing: 2px;
              height: $line-height*2;
              overflow: hidden;
              margin-bottom: 5px;
            }
            > .news-content {
              font-size: 14px;
              color: $content-color;
              line-height: $line-height;
              height: $line-height*3;
              padding-right: 25px;
              overflow: hidden;
            }
          }
        }
      }
      > .movie {
        .movie-video {
          display: block;
          width: 100%;
          height: 300px;
        }
        .movie-name {
          color: $title-color;
          font-weight: bold;
          font-family: bold;
          line-height: 30px;
          text-align: center;
          letter-spacing: 2px;
          margin-top: 20px;
        }
      }
    }
  }
</style>
