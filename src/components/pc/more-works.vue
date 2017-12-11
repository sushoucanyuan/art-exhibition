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

      <div class="pc-subpage-list-item" v-for="(item, index) in works" :key="index">
        <img class="pc-subpage-img" :src="'static/works/' + item.src">
        <div class="pc-subpage-introduce">
          <div class="pc-subpage-title">
            <div class="pc-subpage-maintitle">{{item.name}}</div>
            <div class="pc-subpage-subtitle" v-if="item.author">{{item.author}}</div>
          </div>
          <div class="pc-subpage-description">{{item.description}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { works } from '@/assets/data/works'

  export default {
    data() {
      return {
        works
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/subpage.scss";
</style>
