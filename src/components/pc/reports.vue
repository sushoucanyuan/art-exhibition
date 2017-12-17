<template>
  <div id="reports" class="pc-main-container">

    <ul class="pc-main-sidebar">
      <li v-for="(item, index) in sidebar" :key="index" :class="{'mark': selected == index }" @click="selected = index">
        <div v-for="(item, index) in item" :key="index">{{item}}</div>
      </li>
    </ul>

    <div class="pc-main-info">
      <keep-alive>
        <reports-news v-if="selected == 0" :type="0" key="0"></reports-news>
        <reports-news v-if="selected == 1" :type="1" key="1"></reports-news>
        <reports-news v-else :type="2" key="2"></reports-news>        
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import reportsNews from '@/components/pc/reports-news.vue'

  export default {
    data() {
      return {
        selected: 0,
        component: 'reportsNews',
        sidebar: [
          ['HOT NEWS', '热门新闻'],
          ['LATESTS INFORMATION', '最新资讯'],
          ['RELATED VIDEO', '相关视频']
        ]
      }
    },
    components: {
      reportsNews
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";

  #reports {
    position: relative;
    > .pc-main-info {
      .news-container {
        flex-wrap: wrap;
        display: flex;
        align-items: flex-start;
        min-height: 570px;
        padding-top: 30px;
        > .news-item {
          $img-height: 160px;
          box-sizing: border-box;
          width: 50%;
          padding-top: 16px;
          &:nth-child(odd) {
            padding-right: 20px;
          }
          &:nth-child(even) {
            padding-left: 20px;
          }
          &:hover > .news-description{
            text-decoration: underline;
          }
          > .news-img {
            display: block;
            width: 100%;
            height: $img-height;
          }
          > .news-date {
            opacity: 0.7;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 1px;
            padding: 15px 0 8px;
          }
          > .news-description {
            $line-height: 22px;
            font-size: 14px;
            line-height: $line-height;
            letter-spacing: 1px;
            height: 3 * $line-height;
            overflow: hidden;
          }
        }
      }
    }
    .pagination {
      margin-top: 20px;
      text-align: right;
    }
  }
</style>
