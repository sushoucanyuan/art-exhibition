<template>
  <div id="more-artists">

    <div class="pc-subpage-info">

      <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{name: 'artists-and-works'}">参展艺术家·作品</el-breadcrumb-item>
        <el-breadcrumb-item>更多艺术家</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="pc-subpage-radio">
        <i class="artists icon-accountfilling active"></i>
        <i class="works icon-pic-filling not-active" @click="$router.push({name: 'more-works'})"></i>
      </div>

      <div class="pc-subpage-list-item" v-for="(item, index) in artists" :key="index">
        <img class="pc-subpage-img" :src="'static/artists/' + item.src">
        <div class="pc-subpage-introduce">
          <div class="pc-subpage-title">
            <div class="pc-subpage-maintitle pc-name">
              <el-tooltip effect="dark" content="点击查看详细信息" placement="top">
                <span @click="$router.push({name: 'more-artists-detail', params:{id: 0}})">{{item.name}}</span>
              </el-tooltip>
            </div>
          </div>
          <div class="pc-subpage-description">{{item.description}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { artists } from '@/assets/data/artists'

  export default {
    data() {
      return {
        artists
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/subpage.scss";
</style>
