<template>
  <div id="more-works">

    <div class="pc-subpage-container">

      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}">{{$t('m.artistCollection')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('m.moreCollections')}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="pc-subpage-radio">
        <i class="artists icon-accountfilling not-active" @click="$router.push({name: 'more-artists'})"></i>
        <i class="works icon-pic-filling active"></i>
      </div>

      <div class="work" v-for="(item, index) in gallery" :key="index">
        <div v-for="work in item" :key="work.id">
          <div class="work-img">
            <img v-lazy="work.picurl">
          </div>
          <div class="work-info">
            <div class="work-name">
              <span class="pc-name" @click="$router.push({name: 'more-works-detail', params:{id: work.id}})">{{work.name}}</span>
            </div>
            <div v-if="work.authorname" class="work-author">
              <span class="pc-name" @click="$router.push({name: 'more-artists-detail', params:{id: work.author}})">{{work.authorname}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { getWorks } from '@/api'

  export default {
    data() {
      return {
        gallery: []
      }
    },
    methods: {
      getWorks
    },
    beforeMount() {
      this.getWorks().then(works => {
        for (let i = 0; i < works.length; i += 3) {
          this.gallery.push(works.slice(i, i + 3))
        }
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #more-works {
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
        height: 240px;
        max-width: 40%;
        padding-left: 20px;
        overflow: hidden;
        &:nth-last-child {
          padding-left: none;
        }
        > .work-img {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100% - #{$info-height + $info-padding});
          min-width: 200px;
          margin-bottom: $info-padding;
          background-color: $img-backgroundColor;
          > img {
            display: block;
            width: 100%;
            height: 100%;
            &[lazy="error"],
            &[lazy="loading"] {
              display: inline-block;
              width: 40px;
              height: 40px;
              margin: calc((100% - 40px) /2) 0;
            }
          }
        }
        > .work-info {
          font-size: 15px;
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
  }
</style>
