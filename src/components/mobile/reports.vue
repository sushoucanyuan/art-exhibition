<template>
  <div id="reports">
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

    <mt-tab-container class="info" v-model="selected">
      <mt-tab-container-item id="1">
        <reports-news :type="0" key="0"></reports-news>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <reports-news :type="1" key="1"></reports-news>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <reports-news :type="2" key="2"></reports-news>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import reportsNews from '@/components/mobile/reports-news.vue'

  export default {
    data() {
      return {
        selected: "1"
      }
    },
    components: {
      reportsNews
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #reports {
    padding-left: $main-padding;
    padding-right: $main-padding;
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
        h6 {
          color: #a7a7a7;
          font-size: 0.6rem;
          &:nth-child(2) {
            font-weight: normal;
            padding-top: 0.1rem;
          }
        }
        &.is-selected {
          border-bottom: none;
        }
        &.is-selected h6 {
          color: #000;
        }
      }
    }
    > .info {
      .pagination {
        text-align: right;
        margin: 1rem 0;
      }
      .news {
        flex-wrap: wrap;
        display: flex;
        align-items: flex-start;
        min-height: 32rem;
        .news-container {
          box-sizing: border-box;
          width: 50%;
          padding-top: 1rem;
          > .news-img {
            display: block;
            width: 100%;
            height: 6.5rem;
          }
          > .news-date {
            opacity: 0.7;
            font-size: 0.8rem;
            font-weight: lighter;
            line-height: 1rem;
            padding: 0.75rem 0;
          }
          $line-height: 1.2rem;
          > .news-title {
            color: $title-color;
            font-size: 0.75rem;
            font-weight: bold;
            line-height: $line-height;
            height: 2 * $line-height;
            overflow: hidden;
            > .icon {
              height: 1rem;
            }
          }
          > .news-description {
            color: $content-color;
            font-size: 0.75rem;
            line-height: $line-height;
            height: 3 * $line-height;
            margin-top: 0.2rem;
            overflow: hidden;
          }
        }
        .news-container:nth-child(even) {
          padding-left: 0.8rem;
        }
      }
    }
  }
</style>