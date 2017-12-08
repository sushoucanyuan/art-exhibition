<template>
  <div id="reports-detail">

    <div class="pc-info">

      <div class="link">
        <router-link class="pc-link" :to="{name: 'reports'}">展览报道</router-link>
        &nbsp;&gt;&nbsp;
        <router-link class="pc-link" :to="{name: 'reports-detail'}">热点新闻</router-link>
      </div>

      <div class="page">
        <h4>27度角——东湖国际生态雕塑双年展</h4>
        <div class="date">2017年08月14日</div>
        <p>sssss</p>
        <p>sssss</p>
        <img src="static/reports-detail/reports_1.png">  
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #reports-detail{
    > .pc-info {
      padding-left: $mes-padding;
      padding-right: $mes-padding;
      > .link {
        cursor: pointer;
        margin: 30px 0 60px 10px;
        .pc-link {
          font-size: 14px;
          line-height: 24px;
        }
      }
      > .page{
        padding: 0 50px;
        text-align: center;
        letter-spacing: 2px;
        > h4{
          font-size: 24px;
        }
        > .date{
          font-size: 12px;
          margin: 20px 0;
        }
        > p{
          font-size: 16px;
          line-height: 2;
          text-indent: 2em;
          text-align: left;
        }
        > img{
          margin: 10px 0;
          width: 100%;
        }
      }
    }
  }
</style>
