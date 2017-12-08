<template>
  <div id="more-works">

    <div class="pc-info">

      <div class="icon">
        <i class="iconfont icon-viewgallery" :class="{active: type == 'gallery'}" @click="type = 'gallery'"></i>
        <i class="iconfont icon-viewlist" :class="{active: type == 'list'}" @click="type = 'list'"></i>
      </div>

      <div class="link">
        <router-link class="pc-link" :to="{name: 'artists-and-works'}">参展艺术家·作品</router-link>
        &nbsp;&gt;&nbsp;
        <router-link class="pc-link" :to="{name: 'more-works'}">更多作品</router-link>        
      </div>

      <div v-if="type == 'list'" class="work list" v-for="(item, index) in works" :key="index">
        <img class="work-img" :src="'static/works/' + item.src">
        <div class="work-info">
          <div class="work-name">{{item.name}}</div>
          <div class="work-author">{{item.author}}</div>
          <div class="work-description">{{item.description}}</div>
        </div>
      </div>

      <div v-if="type == 'gallery'" class="work gallery">
        <div class="line" v-for="(item, index) in gallery" :key="index">
          <div v-for="item in item" >
            <img class="work-img" :src="'static/works/' + item.src">
            <div class="work-info">
              <div class="work-name">{{item.name}}</div>
              <div v-if="item.author" class="work-author">{{item.author}}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
  import { works, imgs } from '@/assets/data/works'

  export default {
    data() {
      return {
        imgs,
        works,
        gallery: [],
        type: 'list'
      }
    },
    beforeMount() {
      for (let i = 0; i < imgs.length; i += 3) {
        this.gallery.push(imgs.slice(i, i + 3))
      }
      console.log(this.gallery)

    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #more-works {
    > .pc-info {
      position: relative;
      margin-top: 30px;
      padding-left: $mes-padding;
      padding-right: $mes-padding;
      > .icon {
        cursor: pointer;
        font-size: 0;
        position: absolute;
        top: 0;
        right: $mes-padding;
        > i {
          $color: rgba(1, 1, 1, 0.4);
          $active-color: rgb(1, 1, 1);
          color: $color;
          font-size: 24px;
          padding: 7px;
          border: 1px solid $color;
          &:first-child {
            border-right: 1px solid rgb(1, 1, 1);
          }
          &:last-child {
            border-left: none;
          }
          &.active {
            color: $mark-color;
            border-color: $active-color;
          }
        }
      }
      > .link {
        cursor: pointer;
        margin: 0 0 60px 10px;
        .pc-link {
          font-size: 14px;
          line-height: 24px;
        }
      }
      > .work.list {
        $img-width: 34%;
        $info-width: 60%;
        &:nth-last-child(n+2){
          margin-bottom: 50px;
        }
        > .work-img {
          vertical-align: top;
          display: inline-block;
          width: $img-width;
          margin-right: 99% - $img-width - $info-width;
        }
        > .work-info {
          vertical-align: top;
          display: inline-block;
          width: $info-width;
          > .work-name {
            color: $title-color;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            margin-bottom: 5px;
          }
          > .work-author {
            color: $title-color;
            font-size: 20px;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }
          > .work-description {
            color: $content-color;
            font-size: 16px;
            line-height: 2;
            letter-spacing: 2px;
          }
        }
      }
      > .work.gallery{
        > .line{
          display: flex;
          justify-content: space-between;
          width: 100%;
          &:nth-last-child(n+2){
            margin-bottom: 20px;
          }
          >div{
            $info-height: 44px;
            $info-padding: 10px;
            padding-left: 20px;
            overflow: hidden;
            &:nth-last-child{
              padding-left: none;
            }
            > .work-img{
              display: block;
              width: 100%;
              height: calc(100% - #{$info-height + $info-padding});
              margin-bottom: $info-padding;
            }
            > .work-info{
              font-size: 14px;
              line-height: $info-height / 2 ;
              text-align: center;              
              letter-spacing: 2px;
              display: flex;
              flex-flow: column;
              justify-content: center;
              height: $info-height;
              > .work-name{
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
</style>
