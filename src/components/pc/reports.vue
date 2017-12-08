<template>
  <div id="reports" class="pc-info">
    <div class="mes">

      <div class="pc-search">
        <input type="text">      
      </div>

      <ul class="sidebar">
        <li v-for="(item, index) in sidebar" :key="index" :class="{'mark': selected == index }" @click="selected = index">
          <div v-for="(item, index) in item" :key="index">{{item}}</div>
        </li>
      </ul>

      <div class="news" v-if="selected == '0'">
        <div class="news-container">
          <div class="news-item" v-for="(item, index) in show_news" :key="index">
            <img class="news-img" :src="'static/reports/' + item.src">
            <p class="news-date">{{item.date}}</p>          
            <p class="news-description">{{item.description}}</p>
          </div>
        </div>
        <el-pagination class="pagination" :total="news.length" :page-size="4" :current-page.sync="page.news" layout="prev, pager, next, total"></el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
  import { news, information, video } from '@/assets/data/reports'

  export default {
    data() {
      return {
        news,
        information,
        video,
        page:{
          news: 1
        },
        selected: "0",
        sidebar: [
          ['HOT NEWS', '热门新闻'],
          ['LATESTS INFORMATION', '最新资讯'],
          ['RELATED VIDEO', '相关视频']
        ]
      }
    },
    computed: {
      show_news() {
        let news = this.news,
          page = this.page.news
        if (page * 4 > news.length) {
          return news.slice(page * 4 - 4)
        }
        else {
          return news.slice(page * 4 - 4, page * 4)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #reports {
    position: relative;
    > .mes {
      width: $mes-width;
      min-height: 300px;
      margin: 0 auto;
      > .pc-search {
        margin: 30px 0;
      }
      > .news {
        .news-container {
          flex-wrap: wrap;
          display: flex;
          > .news-item{
            box-sizing: border-box;
            width: 50%;
            padding-top: 16px;
            &:nth-child(even){
              padding-left: 20px;
            }
            > .news-img {
              display: block;
              width: 100%;
              height: 200px;
            }
            > .news-date {
              opacity: 0.7;
              font-size: 14px;
              padding: 20px 0 10px;
            }
            > .news-description {
              $line-height: 20px;
              font-size: 14px;
              line-height: $line-height;
              height: 4 * $line-height;
              overflow: hidden;
              text-overflow: ellipsis;
            }            
          }
        }
      }
      > .sidebar {
        $color: rgb(56, 56, 56);
        cursor: pointer;
        color: $color;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
        text-align: left;
        position: absolute;
        top: 80px;
        left: 40px;
        width: $side-width;
        > li {
          position: relative;
          padding: 16px 0;
          transition: 0.4s;
          &.mark {
            color: $mark-color;
          }
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            border-top: 1px solid $color;
          }
          > div:first-child{
            font-weight: bold;
          }
        }
      }
      .pagination{
        text-align: right;
      }
    }
  }
</style>