<template>
  <div id="artists-and-works">

    <div class="imgs">

      <div class="left">
        <div v-for="(item,index) in left" :key="index">
          <img :src="item.src">
            <div class="info" data-rjs="3">
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
        <div v-for="(item,index) in right" :key="index">
          <img :src="item.src" data-rjs="3">
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

    <div class="link">
      <span @click="$router.push({name: 'more-artists'})">&lt; 更多艺术家 </span>      
      <span @click="$router.push({name: 'more-works'})">更多作品 &gt;</span>
    </div>

  </div>
</template>

<script>
  import { left, right } from '@/common/data/artists-and-works'

  export default {
    data() {
      return {
        left,
        right
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #artists-and-works {
    padding-left: $main-padding;
    padding-right: $main-padding;
    > .link {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      color: $link-color;
    }
    > .imgs {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      > .left,
      > .right {
        vertical-align: top;
        > div {
          margin-bottom: 1rem;
          > img {
            display: block;
            width: 100%;
          }
          > .info {
            text-align: center;
            padding: 1rem 0;
            border: 0.15rem solid rgb(71, 71, 71);
            border-top: none;
            > div {
              font-size: 0.8rem;
              line-height: 1.2rem;
              letter-spacing: 0.15rem;
            }
            > div:nth-child(1) {
              font-weight: bold;
            }
          }
        }
      }
      > .left {
        width: 58%;
      }
      > .right {
        width: 39%;
      }
    }
  }
</style>
