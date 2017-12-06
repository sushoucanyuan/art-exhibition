<template>
  <div id="artists-and-works">
    <div class="main">
      <input class="search" type="text">
      <div class="view-more" title="查看更多信息">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>        
      </div>
      <div class="imgs">
        <div class="left">
          <div v-for="(item,index) in left" :key="index">
            <img :src="require('@/../static/artists/' + item.src)">
            <div class="info">
              <div class="first">{{item.first}}</div>
              <div>{{item.second}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div v-for="(item,index) in right" :key="index">
            <img :src="require('@/../static/artists/' + item.src)">
            <div class="info">
              <div class="first">{{item.first}}</div>
              <div>{{item.second}}</div>
            </div>
          </div>        
        </div>
        <ul class="sidebar">
          <li>ASSADOUR MARKAROV<br/>阿萨杜尔·马科洛夫&nbsp;&nbsp;生灵</li>
          <li>CHRISTOPH MANCKE<br/>芒克&nbsp;&nbsp;REFLRCTION</li>
          <li>RALFONSO GSCHWEND<br/>拉尔方索&nbsp;&nbsp;INFINITY</li>
          <li>陈文令&nbsp;&nbsp;海港</li>
          <li>陈志光&nbsp;&nbsp;四海</li>
          <li>傅中望&nbsp;&nbsp;迁徙</li>
          <li>霍波洋&nbsp;&nbsp;枯荣</li>
          <li>姜杰&nbsp;&nbsp;现在开始</li>
          <li class="link">更多作品</li>        
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        left: [
          { src: 'Infinity.png', first: 'RALFONSO GSCHWEND', second: '拉尔方索 INFINITY' },
          { src: '生灵.png', first: 'ASSADOUR MARKAROV', second: '阿萨杜尔·马科洛夫 生灵' },
          { src: '弯曲的维度.png', first: '岳敏君', second: '弯曲的维度' }
        ],
        right: [
          { src: 'Reflection.png', first: 'CHRISTOPH MANCKE', second: '芒克 REFLECTION' },
          { src: '现在开始.png', first: '姜杰', second: '现在开始' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  #artists-and-works {
    text-align: center;
    > .main {
      $length: 36px;
      display: inline-block;
      position: relative;
      > .search {
        display: block;
        width: 100%;
        height: $length;
        margin: 30px 0;
      }
      > .view-more {
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: -114px;
        width: $length;
        height: $length;
        box-shadow: 0 2px 8px -1px rgb(228, 220, 220);
        border-radius: $length / 2;
        background-color: rgb(255, 255, 255);
        transform: scale(1.3);
        transition: 0.5s;
        &:hover {
          transform: scale(1.6);
        }
        @mixin line($top) {
          position: absolute;
          left: 0;
          right: 0;
          display: inline-block;
          width: 14px;
          height: 2px;
          background-color: $base-color;
          margin: $top auto 0;
        }
        > .first {
          @include line(12px);
        }
        > .second {
          @include line(17px);
        }
        > .third {
          @include line(22px);
        }
      }
      > .imgs {
        position: relative;
        > .left,
        > .right {
          vertical-align: top;
          display: inline-block;
          > div {
            margin-bottom: 16px;
            > img {
              display: block;
              width: 100%;
            }
            > .info {
              padding: 20px 0;
              border: 2px solid rgb(71, 71, 71);
              border-top: none;
              > div {
                @include font-size(10);
                line-height: 18px;
                letter-spacing: 2px;
              }
              > .first {
                font-weight: bold;
              }
            }
          }
        }
        > .left {
          width: 315px;
          margin-right: 14px;
        }
        > .right {
          width: 220px;
        }
        > .sidebar {
          color: rgb(56, 56, 56);
          @include font-size(10);
          line-height: 20px;
          letter-spacing: 1px;
          text-align: left;
          position: absolute;
          top: 3px;
          left: -190px;
          > li {
            position: relative;
            padding: 16px 0;
            &.link {
              color: rgb(239, 100, 100);
            }
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 40px;
              border-top: 1px solid rgb(1, 1, 1);
            }
          }
        }
      }
    }
  }
</style>
