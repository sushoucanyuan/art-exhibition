<template>
  <div id="more-artists-detail">

    <div class="pc-subpage-container">
      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}">参展艺术家·作品</el-breadcrumb-item>
        <el-breadcrumb-item :to="{name: 'more-artists'}">更多艺术家</el-breadcrumb-item>
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <swiper ref="mySwiper" class="artist-detail" :options="options">
      <swiper-slide v-for="(item, index) in artists" :key="item.id" :data-hash="'/more-artists-detail/' + item.id">
        <div class="artist">
          <div class="pc-subpage-container">
            <div class="artist-main">
              <span class="artist-name">{{item.name}}</span>
              <div v-if="index === initIndex" class="artist-img">
                <img :src="item.picurl">                
              </div>
              <div v-else class="artist-img">
                <img class="swiper-lazy" :data-src="item.picurl">
                <div class="swiper-lazy-preloader"></div>                
              </div>
            </div>
          </div>
        </div>
        <div class="introduce">
          <div class="pc-subpage-container">
            <p class="introduce-info">{{item.info}}</p>
            <p class="introduce-content" v-html="item.content"></p>
          </div>
        </div>
        <div class="works" v-for="item in works[index]" :key="item.id">
          <div class="pc-subpage-container">
            <div class="works-img">
              <img :src="item.picurl">
            </div>
            <div class="works-info">
              <h6 class="works-name">
                <span class="pc-name" @click="$router.push({name: 'more-works-detail', params: {id: item.id}})">{{item.name}}</span>
              </h6>
              <p class="works-content" v-html="item.content"></p>
            </div>            
          </div>          
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>
  import { getAllArtists, getArtistAllWorks } from '@/api'

  export default {
    props: ['id'],
    data() {
      return {
        path: '',
        initIndex: 0,
        index: 0,
        works: [],
        artists: [],
        options: {
          preloadImages: false,
          lazy: true,
          initialSlide: 0,
          autoHeight: true,
          hashNavigation: {
            watchState: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            slideChange: () => {
              let index = this.swiper.realIndex
              let id = this.artists[index].id
              this.index = index
              if (!this.works[index]) {
                this.getArtistAllWorks({ id }).then(works => {
                  this.$set(this.works, index, works)
                })
              }
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      name() {
        let artist = this.artists[this.index]
        if (artist) return artist.name
        else return '...'
      }
    },
    methods: {
      getAllArtists,
      getArtistAllWorks
    },
    beforeMount() {
      this.getAllArtists().then(artists => {
        this.artists = artists
        // 滑到指定的初始艺术家
        for (let i = 0; i < artists.length; i++) {
          if (artists[i].id === this.id) {
            this.swiper.slideTo(i, 0, false)
            break
          }
        }
        // 加载初始页面作品
        let index = this.swiper.realIndex
        this.index = index
        let id = this.artists[index].id
        if (!this.works[index]) {
          this.getArtistAllWorks({ id }).then(works => {
            this.$set(this.works, index, works)
          })
        }
      })
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        // 用于加载初始页面图片
        vm.initIndex = vm.swiper.realIndex
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #more-artists-detail {
    > .artist-detail {
      $artist-height: 180px;
      $button-top: $artist-height / 2;
      .swiper-button-prev {
        top: $button-top;
        left: $button-position;
      }
      .swiper-button-next {
        top: $button-top;
        right: $button-position;
      }
      .artist {
        box-sizing: border-box;
        height: $artist-height;
        padding: 20px 0;
        background-color: #efefef;
        > .pc-subpage-container {
          height: 100%;
          > .artist-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            padding: 0 8px;
            > .artist-name {
              font-size: 36px;
              letter-spacing: 5px;
            }
            > .artist-img {
              $side-length: 130px;
              position: relative;
              width: $side-length;
              height: $side-length;
              border-radius: 50%;
              box-shadow: 0 4px 15px 4px rgba(152, 146, 146, 0.9);
              overflow: hidden;
              > img {
                width: 100%;
                height: 100%;
                transform: scale(1.1); // 消除黑线边框
              }
            }
          }
        }
      }
      .introduce {
        margin-top: 30px;
        $font-size: 14px;
        $line-height: 2 * $font-size;
        > .pc-subpage-container {
          font-size: 14px;
          line-height: $line-height;
          letter-spacing: 2px;
          > .introduce-info {
            color: $title-color;
            font-weight: bold;
          }
          > .introduce-content {
            color: $content-color;
            min-height: 3 * $line-height;
            overflow: hidden;
          }
        }
      }
      .works {
        margin-top: 30px;
        > .pc-subpage-container {
          display: flex;
          justify-content: space-between;
          > .works-img {
            display: flex;
            justify-content: center;
            width: 52%;
            > img {
              max-width: 100%;
              height: 220px;
            }
          }
          > .works-info {
            width: 45%;
            > .works-name {
              color: $title-color;
              font-size: 26px;
              letter-spacing: 3px;
              margin-bottom: 10px;
            }
            > .works-content {
              color: $content-color;
              line-height: 35px;
              letter-spacing: 2px;
            }
          }
        }
      }
    }
  }
</style>
