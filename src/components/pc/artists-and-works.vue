<template>
  <div id="artists-and-works" class="pc-subpage-container">

    <div class="mes">

      <div class="imgs">

        <div class="left">
          <div v-for="(item,index) in left" :key="index" @mouseover="mouseover(item.index)" @mouseout="mouseout">
            <img :src="item.src">
            <div class="info">
              <div>
                <span class="pc-name" @click="$router.push({name: 'more-artists-detail', params:{id: item.author}})">{{item.first}}</span>
              </div>
              <div>
                <span class="pc-name" @click="$router.push({name: 'more-works-detail', params:{id: item.id}})">{{item.second}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div v-for="(item,index) in right" :key="index" @mouseover="mouseover(item.index)" @mouseout="mouseout">
            <img :src="item.src">
            <div class="info">
              <div>
                <span class="pc-name" @click="$router.push({name: 'more-artists-detail', params:{id: item.author}})">{{item.first}}</span>
              </div>
              <div>
                <span class="pc-name" @click="$router.push({name: 'more-works-detail', params:{id: item.id}})">{{item.second}}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <ul class="sidebar">
      <li v-for="(item, index) in sidebar" :key="index" :class="{'mark': hoverImg == index }">
        <pre v-for="(item, index) in item" :key="index">{{item}}</pre>
      </li>
      <li class="link" title="查看更多作品" @click="$router.push({name: 'more-works'})">更多作品</li>
    </ul>

    <div class="viewmore iconfont icon-menu" title="查看更多艺术家" @click="$router.push({name: 'more-works'})"></div>

  </div>
</template>

<script>
  import { left, right } from '@/common/data/artists-and-works'

  export default {
    data() {
      return {
        left,
        right,
        sidebar: [
          ['傅中望  迁徙'],
          ['JAUME PLENSA  永无止境'],
          ['岳敏君  弯曲的维度'],
          ['景育民 树影'],
          ['王度 骰子'],
          ['朱铭 太极起势']
        ],
        hoverImg: null
      }
    },
    methods: {
      mouseover(index) {
        this.hoverImg = index
      },
      mouseout() {
        this.hoverImg = null
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #artists-and-works {
    position: relative;
    > .mes {
      width: $info-width;
      margin: 30px auto 0;
      > .imgs {
        $left-width: 58%;
        $right-width: 39%;
        > .left,
        > .right {
          vertical-align: top;
          display: inline-block;
          > div {
            cursor: pointer;
            margin-bottom: 16px;
            > img {
              display: block;
              width: 100%;
            }
            > .info {
              text-align: center;
              padding: 20px 0;
              border: 2px solid rgb(71, 71, 71);
              border-top: none;
              > div {
                font-size: 10px;
                line-height: 20px;
                letter-spacing: 2px;
              }
              > div:nth-child(1) {
                font-weight: bold;
              }
            }
          }
        }
        > .left {
          width: $left-width;
          margin-right: 99% - $left-width - $right-width;
        }
        > .right {
          width: $right-width;
        }
      }
    }
    > .sidebar {
      $color: rgb(56, 56, 56);
      color: $color;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1px;
      text-align: left;
      position: absolute;
      top: 80px;
      left: 40px;
      width: $side-width;
      > li {
        position: relative;
        padding: 16px 0;
        transition: 0.4s;
        &.mark {
          color: $mark-color;
        }
        &.link {
          cursor: pointer;
          color: $link-color;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          border-top: 1px solid $color;
        }
      }
    }
    > .viewmore {
      color: $button-color;
      font-size: 24px;
      text-align: center;
      $length: 36px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 90px;
      width: $length;
      height: $length;
      line-height: $length;
      box-shadow: 0 2px 8px -1px rgb(228, 220, 220);
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      transform: scale(1.3);
      transition: 0.5s;
      &:hover {
        transform: scale(1.6);
      }
    }
  }
</style>
