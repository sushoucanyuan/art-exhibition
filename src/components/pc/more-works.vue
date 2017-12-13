<template>
  <div id="more-works">

    <div class="pc-subpage-info">

      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}">参展艺术家·作品</el-breadcrumb-item>
        <el-breadcrumb-item>更多作品</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="pc-subpage-radio">
        <i class="artists icon-accountfilling not-active" @click="$router.push({name: 'more-artists'})"></i>
        <i class="works icon-pic-filling active"></i>
      </div>

      <div class="work" v-for="item in gallery" :key="item.id">
        <div v-for="(item, index) in item" :key="index">
          <img class="work-img" :src="'static/works/' + item.img">
          <div class="work-info">
            <div class="work-name">{{item.name}}</div>
            <div v-if="item.author" class="work-author">{{item.author}}</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { getAllWorks } from '@/api'

  export default {
    data() {
      return {
        gallery: []
      }
    },
    methods:{
      getAllWorks
    },
    beforeMount() {
      this.getAllWorks().then(({ data }) => {
        let works = data.allWorks
        for (let i = 0; i < works.length; i += 3) {
          this.gallery.push(works.slice(i, i + 3))
        }        
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";

  .work {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &:nth-last-child(n + 2) {
      margin-bottom: 20px;
    }
    > div {
      $info-height: 44px;
      $info-padding: 10px;
      padding-left: 20px;
      overflow: hidden;
      &:nth-last-child {
        padding-left: none;
      }
      > .work-img {
        display: block;
        width: 100%;
        height: calc(100% - #{$info-height + $info-padding});
        margin-bottom: $info-padding;
      }
      > .work-info {
        font-size: 14px;
        line-height: $info-height / 2;
        text-align: center;
        letter-spacing: 2px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        height: $info-height;
        > .work-name {
          font-weight: bold;
        }
      }
    }
  }
</style>