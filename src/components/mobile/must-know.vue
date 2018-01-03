<template>
  <div id="must-know">

    <img class="header" src="static/must_know/header.png" data-rjs="3">

    <div class="main">
      <h6>开幕时间 OPENING TIME</h6>
      <p>2017年12月17日 下午3:00</p>
      <h6>展览时间 EXHIBITION TIME</h6>
      <p>2017年12月17日——2018年4月17日</p>
      <h6>展览地址 PAVILION ADRESS</h6>
      <p>湖北省武汉市东湖高新区九峰街道石门峰路9号</p>
      <p>可搭乘18路、20路、518路至石门峰纪念公园</p>
      <p><a class="link" href="http://j.map.baidu.com/oUC2N">地图<i class="icon-fenxiang iconfont"></i></a></p>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #must-know {
    > .header {
      display: block;
      width: 100%;
      height: $swiper-height;
    }
    > .main {
      padding-left: $main-padding;
      padding-right: $main-padding;
      > h6,
      p {
        line-height: 2rem;
        font-size: 0.75rem;
        letter-spacing: 0.15rem;
      }
      > h6 {
        margin-top: 2rem;
        &:first-child {
          margin-top: 1.2rem;
        }
      }
      > p {
        a.link {
          color: $link-color;
          display: block;
          margin-top: 2rem;
        }
        .iconfont {
          font-size: 0.9rem;
          padding-left: 0.4rem;
        }
      }
      > img {
        width: 100%;
        padding: 0.4rem 0;
      }
    }
  }
</style>
