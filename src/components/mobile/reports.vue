<template>
  <div id="reports" class="mobile-info">
    <mt-navbar class="navbar" v-model="selected">
      <mt-tab-item class="navbar-item" id="1">
        <h6>HOT NEWS</h6>
        <h6>热门新闻</h6>
      </mt-tab-item>
      <mt-tab-item class="navbar-item" id="2">        
        <h6>LATESTS INFORMATION</h6>
        <h6>最新资讯</h6>
      </mt-tab-item>
      <mt-tab-item class="navbar-item" id="3">
        <h6>RELATED VIDEO</h6>
        <h6>相关视频</h6>
      </mt-tab-item>
    </mt-navbar>

    <div class="mobile-search">
      <input type="text">      
    </div>

    <mt-tab-container class="info" v-model="selected">
      <mt-tab-container-item class="news" id="1">
        <div class="news-container" v-for="(item, index) in news" :key="index">
          <img class="news-img" :src="'static/reports/' + item.src">
          <p class="news-date">{{item.date}}</p>          
          <p class="news-description">{{item.description}}</p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

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
        selected: "1"
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";
  
  #reports {
    > .navbar {
      padding-top: 0.4rem;
      justify-content: space-between;
      .navbar-item {
        flex-basis: auto;
        text-align: left;
        letter-spacing: 0.1rem;
        white-space: nowrap;
        padding: 0.75rem 0 0.75rem 0.2rem;
        overflow: hidden;
        &.is-selected {
          border-bottom: none;
          color: $link-active-color;
        }
        h6 {
          @include font-size(8);
        }
        h6:nth-child(2) {
          font-weight: normal;
          padding-top: 0.1rem;
        }
      }
    }
    > .info {
      .news {
        flex-wrap: wrap;
        display: flex;
        .news-container {
          box-sizing: border-box;
          width: 50%;
          padding-top: 1rem;
          > .news-img {
            display: block;
            width: 100%;
            height: 6.2rem;
          }
          > .news-date {
            opacity: 0.7;
            font-size: 0.75rem;
            padding: 0.7rem 0;
          }
          > .news-description {
            $line-height: 16px;
            font-size: 0.75rem;
            line-height: $line-height;
            height: 4 * $line-height;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }    
        .news-container:nth-child(even){
          padding-left: 0.8rem;
        }
      }
    }
  }
</style>