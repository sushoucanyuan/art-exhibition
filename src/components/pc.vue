<template>
  <div id="pc">
    <router-view/>
  </div>
</template>

<script>
  import '@/pc.js'

  export default {
    name: 'pc'
  }
</script>

<style lang="scss">
  @import "../assets/scss/theme_pc.scss";

  #pc {
    // 覆盖面包屑组件样式
    .el-breadcrumb__inner {
      letter-spacing: $letter-spacing;
      &:hover{
        color: $mark-color;
      }
    }
    // 轮播自定义按钮
    .swiper-pagination-bullet-custom {
      $side-length: 14px;
      width: $side-length;
      height: $side-length;
      margin: 0 8px;
      border-width: 2px;
      opacity: 0.6;
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
    // 分页器样式重写
    .el-pager > li.active {
      $side-length: 24px;
      color: #fff;
      line-height: $side-length;
      width: $side-length;
      height: $side-length;
      min-width: auto;
      border-radius: 50%;
      background-color: $button-color;
    }
    //艺术家名字标红
    .pc-name:hover {
      cursor: pointer;
      color: $mark-color !important;
    }

    // 链接样式
    .pc-link {
      cursor: pointer;
      color: #0b0b0b;
      font-size: 12px;
      letter-spacing: 2px;
      position: relative;
      display: inline-block;
      transition: 0.4s;
      &.pc-link-active {
        color: $link-color;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        width: 0;
        height: 2px;
        margin: auto;
        background-color: $button-color;
        transition: 0.5s;
      }
      &:hover::after {
        width: 100%;
      }
    }
    // 搜索框样式
    .pc-search {
      $side-length: 40px;
      position: relative;
      display: block;
      &::after {
        content: "\e6ac";
        font-family: "iconfont";
        font-size: 16px;
        line-height: $side-length;
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        width: $side-length;
        height: $side-length;
        display: block;
      }
      > input {
        line-height: $side-length;
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0 $side-length 0 12px;
        border: none;
        background-color: rgb(233, 233, 233);
      }
    }

    // 布局样式
    $padding-bottom: 120px;
    .pc-info {
      box-sizing: border-box;
      width: $main-width;
      margin: 0 auto;
      padding: 0 20px $padding-bottom;
    }

  }
</style>
