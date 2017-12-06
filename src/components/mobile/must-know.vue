<template>
  <div id="must-know">

    <img class="header" src="static/must_know/header.png">

    <div class="mobile-info">
      <h6>开幕时间 OPENING TIME</h6>
      <p>2017年12月17日 下午3:00</p>
      <h6>展览时间 EXHIBITION TIME</h6>
      <p>2017年12月17日--2018年4月17日</p>
      <h6>展览地址 PAVILION ADRESS</h6>
      <p>湖北省武汉市东湖高新区九峰街道石门峰路9号</p>
      <p>可搭乘18路、20路、518路至石门峰纪念公园</p>
      <p class="link">地图<i class="icon-fenxiang iconfont"></i></p>
      <h6>室内外地图指引</h6>
      <p>室内地图</p>
      <img src="static/must_know/map.png">
      <p>室外地图</p> 
      <img src="static/must_know/map.png">
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #must-know {
    > .header {
      display: block;
      width: 100%;
      height: $swiper-height;
    }
    > .mobile-info {
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
        &.link{
          color: $link-active-color;
        }
        .iconfont {
          font-size: 0.9rem;
          padding-left: 0.4rem;
        }
      }
      > img{
        width: 100%;
        padding: 0.4rem 0;
      }
    }
  }
</style>
