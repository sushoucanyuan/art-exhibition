<template>
  <footer id="mobile-footer">
    <div>
      <img class="logo" src="static/logo_footer.png" data-rjs="3" alt="东湖雕塑生态双年展">
      <p>湖北省武汉市</p>
      <p>东湖高新区九蜂街道石门峰路9号</p>
      <p>联系电话：027-87635298</p>
    </div>
    <div>
      <p>访问</p>
      <p>新闻</p>
      <p>艺术作品</p>
      <p>联系方式</p>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #mobile-footer {
    margin-top: 4rem;
    padding: 1rem $main-padding 1.5rem;
    background-color: $footer-backgroundColor;
    > div {
      display: inline-block;
      font-size: 0.6rem;
      line-height: 1.4rem;
      vertical-align: bottom;
      > img {
        width: 6.5rem;
      }
    }
  }
</style>
