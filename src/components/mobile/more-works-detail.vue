<template>
  <back :back="back" id="more-works-detail">
    <div class="work-detail">
      <swiper ref="mySwiper" :options="options">
        <swiper-slide v-for="(item, index) in works" :key="item.id" :data-hash="'/more-works-detail/' + item.id">
          <div class="author-container">
            <div class="author">
              <div v-if="index === initIndex" class="author-img">
                <img :src="artist.src">                
              </div>
              <div v-else class="author-img">
                <img class="swiper-lazy" :data-src="artist.src">
                <div class="swiper-lazy-preloader"></div>                
              </div>
              <div class="author-name">
                <span>{{artist.name}}</span>
              </div>
            </div>             
          </div>
          <div v-if="index === initIndex" class="work-img">
            <img :src="item.picurl">                
          </div>
          <div v-else class="work-img">
            <img class="swiper-lazy" :data-src="item.picurl">
            <div class="swiper-lazy-preloader"></div>                
          </div>
          <div class="pc-subpage-container">
            <div class="work-info">
              <p class="work-name">{{item.name}}</p>
              <p class="work-content" v-html="item.content"></p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>      
    </div>
  </back>
</template>

<script>
  import { getAllWorks } from '@/api'
  import back from '@/components/mobile/back.vue'

  export default {
    props: ['id'],
    data() {
      return {
        initIndex: 0,
        index: 0,
        works: [],
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
              this.index = this.swiper.realIndex
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      artist() {
        let artist = this.works[this.index]
        if (artist) return {
          id: artist.author,
          name: artist.authorname,
          src: artist.authorpicurl
        }
        else return {
          id: 0,
          name: '...',
          src: ''
        }
      }
    },
    methods: {
      getAllWorks,
      back(){
        this.$router.push({name: 'more-works'})
      }
    },
    components: {
      back
    },
    beforeMount() {
      this.getAllWorks().then(works => {
        this.works = works
        // 滑到指定的初始艺术家
        for (let i = 0; i < works.length; i++) {
          if (works[i].id === this.id) {
            this.swiper.slideTo(i, 0, false)
            break
          }
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

  #more-works-detail {
    .swiper-button-prev {
      background-size: 15px 30px;
      top: 21rem;
      left: 0;
    }
    .swiper-button-next {
      background-size: 15px 30px;
      top: 21rem;      
      right: 0;
    }
    .work-detail {
      min-height: 25rem;
      padding-left: $main-padding;
      padding-right: $main-padding;
      .author-container {
        padding-left: 1rem;
        .author {
          $side-length: 3rem;
          box-sizing: border-box;
          display: inline-block;
          margin: 1rem 0;
          > div {
            font-weight: bold;
            line-height: $side-length;
            vertical-align: top;
            display: inline-block;
          }
          > .author-name {
            font-size: 1.2rem;
            letter-spacing: 0.2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left: 1rem;
          }
          > .author-img {
            position: relative;
            width: $side-length;
            height: $side-length;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: -1px 2px 4px 2px rgba(152, 146, 146, 0.9);
            > img {
              width: 100%;
              height: 100%;
              transform: scale(1.1);
            }
          }
        }
      }
      .work-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 16rem;
        margin-bottom: 1rem;
        > img {
          max-width: 100%;
          max-height: 16rem;
        }
      }
      .work-info {
        padding: 0 1rem;
        .work-name {
          color: $title-color;
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 0.2rem;
          margin-bottom: 0.2rem;
        }
        .work-content {
          color: $content-color;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          min-height: 2rem;
        }
      }
    }
  }
</style>
