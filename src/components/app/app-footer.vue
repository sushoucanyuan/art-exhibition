<template>
  <footer id="app-footer">
    <div>
      <img class="logo" src="../../../static/logo.png" alt="东湖雕塑生态双年展">
      <p>湖北省武汉市</p>
      <p>东湖高新区九蜂街道石门峰路9号</p>
      <p>联系电话：027-87635298</p>
    </div>
    <div>
      <p class="link">关于我们</p>
      <p class="link">参展艺术家·作品</p>
      <p class="link">展览报道</p>
      <p class="link">观展需知</p>
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
  #app-footer {
    text-align: center;
    padding: 25px 0 40px;
    background-color: rgb(233, 233, 233);
    > div {
      font-size: 12px;
      text-align: left;
      display: inline-block;
      margin: 0 60px;
      > .logo {
        height: 80px;
      }
      > p {
        line-height: 22px;
        &.link {
          cursor: pointer;
        }
      }
    }
  }
</style>
