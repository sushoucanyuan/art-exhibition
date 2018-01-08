<template>
  <div id="more-works-detail">

    <div class="pc-subpage-container">
      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}"><span v-html="$t('m.artistCollection')"></span></el-breadcrumb-item>
        <el-breadcrumb-item :to="{name: 'more-works'}">{{$t('m.moreCollections')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{name: 'more-artists-detail', params:{id: artist.id}}">{{artist.name}}</el-breadcrumb-item>        
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
      </el-breadcrumb>   
    </div>

    <swiper ref="mySwiper" class="work-detail" :options="options">
      <swiper-slide v-for="(item, index) in works" :key="item.id" :data-hash="'/more-works-detail/' + item.id">
        <div class="author-container pc-subpage-container">
          <div class="author">
            <div v-if="index === initIndex" class="author-img">
              <img :src="artist.src">                
            </div>
            <div v-else class="author-img">
              <img class="swiper-lazy" :data-src="artist.src">
              <div class="swiper-lazy-preloader"></div>                
            </div>
            <div class="author-name">{{artist.name}}</div>
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
</template>

<script>  
  import { getAllWorks } from '@/api'

  export default {
    name: 'more-works-detail',
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
      name() {
        let work = this.works[this.index]
        if (work) return work.name
        else return '...'
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
      getAllWorks
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
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #more-works-detail {
    position: relative;
    > .pc-subpage-container {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 999;
    }
    > .work-detail {
      $button-top: 560px;
      .swiper-button-prev {
        top: $button-top;
        left: $button-position;
      }
      .swiper-button-next {
        top: $button-top;
        right: $button-position;
      }
      .work-img {
        display: flex;
        justify-content: center;
        height: 400px;
        margin-bottom: 20px;
        > img {
          max-width: 100%;
          height: 100%;
        }
      }
      .work-info {
        padding: 0 30px;
        .work-name {
          color: $title-color;
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }
        .work-content {
          color: $content-color;
          line-height: 35px;
          letter-spacing: 2px;
          min-height: 35px;
        }
      }
      .author-container {
        text-align: right;
        .author {
          $side-length: 52px;
          text-align: left;
          box-sizing: border-box;
          display: inline-block;
          height: 100px;
          padding-top: 30px;
          > div {
            font-weight: bold;
            line-height: $side-length;
            vertical-align: top;
            display: inline-block;
          }
          > .author-name {
            font-size: 17px;
            letter-spacing: 2px;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left: 8px;
          }
          > .author-img {
            position: relative;
            width: $side-length;
            height: $side-length;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 1px 2px 5px 2px rgba(152, 146, 146, 0.9);
            > img {
              width: 100%;
              height: 100%;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
</style>
