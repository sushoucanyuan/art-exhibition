<template>
  <div id="about-us">

    <img src="static/must_know/header.png">

    <div class="info pc-info">

      <div class="mes">
        <h4>开幕时间 OPENING TIME</h4>
        <p>2017年12月17日 下午3:00</p>
        <h4>展览时间 EXHIBITION TIME</h4>
        <p>2017年12月17日——2018年4月17日</p>
        <h4>展览地址 PAVILION ADRESS</h4>
        <p>湖北省武汉市东湖高新区九峰街道石门峰路9号</p>
        <p>可搭乘18路、20路、518路至石门峰纪念公园</p>
        <p class="link">地图&nbsp;<i class="icon-fenxiang iconfont"></i></p>
        <h4>室内外地图指引</h4>
        <p>室内地图</p>
        <img src="static/must_know/map.png">
        <p>室外地图</p> 
        <img src="static/must_know/map.png">
      </div>

    </div>

  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #about-us {
    > img {
      display: block;
      width: 100%;
    }
    > .info {
      margin-top: 50px;
      > .mes{
        width: $mes-width;
        margin: 0 auto;
          > h4,
          > p,
          > img {
            margin-bottom: 20px;
          }
          > h4 {
            color: $title-color;
            letter-spacing: 3px;
            &:nth-of-type(n+2){
              margin-top: 60px;
            }
          }
          > p {
            color: $title-color;
            line-height: 20px;
            letter-spacing: 3px;
            &.link{
              cursor: pointer;
              color: $mark-color;
            }
          }
          > img {
            display: block;
            width: 100%;
          }
      }
    }
  }
</style>