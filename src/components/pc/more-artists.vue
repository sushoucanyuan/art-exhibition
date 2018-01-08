<template>
  <div id="more-artists">

    <div class="pc-subpage-container">

      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}"><span v-html="$t('m.artistCollection')"></span></el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('m.moreArtist')}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="pc-subpage-radio">
        <i class="artists icon-accountfilling active"></i>
        <i class="works icon-pic-filling not-active" @click="$router.push({name: 'more-works'})"></i>
      </div>

      <div class="artist" v-for="item in artists" :key="item.id">
        <div class="artist-img">
          <img v-lazy="item.picurl">
        </div>
        <div class="artist-introduce">
          <div class="artist-title">
            <div class="artist-maintitle">
              <el-tooltip class="pc-name" effect="dark" content="点击查看详细信息" placement="top">
                <span @click="$router.push({name: 'more-artists-detail', params:{id: item.id}})">{{item.name}}</span>
              </el-tooltip>
            </div>
          </div>
          <div class="artist-brief">{{item.info}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { getArtists } from '@/api'

  export default {
    data() {
      return {
        artists: []
      }
    },
    methods: {
      getArtists
    },
    beforeMount() {
      this.getArtists().then(artists => {
        this.artists = artists
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #more-artists {
    $img-width: 36%;
    $introduce-width: 56%;
    .artist {
      font-size: 0;
      margin-bottom: 50px;
      > img,
      > div {
        vertical-align: top;
        display: inline-block;
      }
      > .artist-img {
        text-align: center;
        width: $img-width;
        margin-right: 99% - $img-width - $introduce-width;
        background-color: $img-backgroundColor;
        > img {
          width: 100%;
          &[lazy="error"],
          &[lazy="loading"] {
            width: 40px;
            height: 40px;
            margin: 60px 0;
          }
        }
      }
      > .artist-introduce {
        width: $introduce-width;
        .artist-title {
          margin-bottom: 15px;
          > div {
            letter-spacing: 4px;
          }
          > .artist-maintitle {
            color: $title-color;
            font-size: 22px;
            font-weight: bold;
          }
        }
        .artist-brief {
          color: $content-color;
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: 2px;
        }
      }
    }
  }
</style>
