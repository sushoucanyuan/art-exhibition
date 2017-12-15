<template>
  <div id="index">

    <swiper class="swiper" :options="imgs_swiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="'/static/index/' + item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="info">

      <div class="artist">
        <h4 class="title">艺术家</h4>
        <p class="subtitle">ARTISTS</p>
        <swiper ref="artists_swiper" :options="artists_swiper">
          <swiper-slide v-for="(item, index) in artists" :key="item.id">
            <div style="position: relative;">
              <img class="artist-img" :src="item.picurl"/>
            </div>
            <div>
              <div class="artist-name">
                <span class="pc-name" @click="$router.push({name: 'more-artists-detail', params:{id: item.id}})">{{item.name}}</span>
              </div>
              <pre class="artist-brief">{{item.info}}</pre>              
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
            <p class="news-content">为贯彻落实市委陈一新书记“关于创建武汉东湖国际雕塑双年展和雕塑公园的重要批示”，力争以“对标世界一流，规划研究和打造具有世最高水平，代表城市发展最高成就的现代化、国际化.....</p>              
            <button class="news-link" @click="$router.push({name: 'reports-detail', params: {id: 0}})">查看详情</button>            
          </div>
          <img class="news-img" src="/static/reports/news_1.png">          
        </div>
        <div class="news-latest">
          <div v-for="item in newsList" :key="item.id">
            <h4 class="news-title">{{item.title}}</h4>
            <p class="news-content">{{item.info}}</p>            
          </div>
        </div>
      </div>

      <div class="movie">
        <h4 class="title">影像视频</h4>
        <p class="subtitle">MOVIE PHOTO</p>
        <swiper :options="works_swiper">
          <swiper-slide class="movie-container" v-for="(item, index) in movies" :key="index">
            <video class="movie-img" :src="item" controls preload="auto" loop></video>
          </swiper-slide>
          <div class="info-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

    </div>
  </div>
</template>

<script>
  import { imgs, movies } from '@/assets/data/index'
  import { getTopAuthorList, getTopNewsList } from '@/api'

  export default {
    data() {
      return {
        imgs,
        news: [],
        artists: [],
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
    computed:{
      firstNews(){
        return this.news[0]
      },
      newsList(){
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
  @import "../../assets/scss/pc/theme.scss";

  #index {
    > .swiper {
      width: 100%;
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
          color: #f97d56;
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
              line-height: 1.8;
              letter-spacing: 1px;
              padding-left: 5px;
              padding-right: 90px;
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
        .movie-container {
          position: relative;
          .movie-img {
            display: block;
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
