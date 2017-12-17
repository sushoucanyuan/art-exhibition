<template>
  <back :back="back" id="more-artists-detail">
    <swiper ref="mySwiper" :options="options">
      <swiper-slide v-for="(item, index) in artists" :key="item.id" :data-hash="'/more-artists-detail/' + item.id">
        <div class="artist">
          <div class="main-container">
            <div class="artist-main">
              <span class="artist-name">{{item.name}}</span>
              <div v-if="index === initIndex" class="artist-img">
                <img :src="item.picurl" data-rjs="3">
              </div>
              <div v-else class="artist-img">
                <img class="swiper-lazy" :data-src="item.picurl">
                <div class="swiper-lazy-preloader"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="introduce">
          <div class="main-container">
            <p class="introduce-info">{{item.info}}</p>
            <p class="introduce-content" v-html="item.content"></p>
          </div>
        </div>
        <div class="works" v-for="item in works[index]" :key="item.id">
          <div class="main-container" @click="$router.push({name: 'more-works-detail', params: {id: item.id}})">
            <div class="works-img">
              <img :src="item.picurl" data-rjs="3">
            </div>
            <div class="works-info">
              <h6 class="works-name">
                <span>{{item.name}}</span>
              </h6>
              <p class="works-content">{{item.info}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </back>
</template>

<script>
  import { getAllArtists, getArtistAllWorks } from '@/api'
  import back from '@/components/mobile/back.vue'

  export default {
    name: 'more-artists-detail',
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
      }
    },
    methods: {
      getAllArtists,
      getArtistAllWorks,
      back() {
        this.$router.push({ name: 'more-artists' })
      }
    },
    components: {
      back
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
  @import "../../assets/scss/mobile/theme.scss";

  #more-artists-detail {
    $artist-height: 10rem;
    .swiper-button-prev {
      background-size: 15px 30px;
      top: 13.5rem;
      left: $button-position;
    }
    .swiper-button-next {
      background-size: 15px 30px;
      top: 13.5rem;
      right: $button-position;
    }
    .main-container {
      padding: 0 $main-padding;
    }
    .artist {
      box-sizing: border-box;
      height: $artist-height;
      padding: 1rem 0;
      background-color: #efefef;
      > .main-container {
        height: 100%;
        > .artist-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          > .artist-name {
            font-size: 2.2rem;
            letter-spacing: 0.5rem;
          }
          > .artist-img {
            $side-length: 6rem;
            flex-shrink: 0;
            position: relative;
            width: $side-length;
            height: $side-length;
            border-radius: 50%;
            box-shadow: 0 4px 15px 4px rgba(152, 146, 146, 0.9);
            overflow: hidden;
            > img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .introduce {
      margin-top: 1rem;
      $font-size: 1.2rem;
      $line-height: 1.8 * $font-size;
      > .main-container {
        font-size: 1rem;
        line-height: $line-height;
        letter-spacing: 0.2rem;
        > .introduce-info {
          color: $title-color;
          font-weight: bold;
        }
        > .introduce-content {
          color: $content-color;
          min-height: 2 * $line-height;
          overflow: hidden;
        }
      }
    }
    .works {
      margin-top: 1rem;
      > .main-container {
        > .works-img {
          display: flex;
          justify-content: center;
          > img {
            max-width: 100%;
            height: 10rem;
          }
        }
        > .works-info {
          > .works-name {
            color: $title-color;
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
            margin: 0.5rem 0;
          }
          > .works-content {
            color: $content-color;
            line-height: 1.5rem;
            letter-spacing: 0.1rem;
          }
        }
      }
    }
  }
</style>
