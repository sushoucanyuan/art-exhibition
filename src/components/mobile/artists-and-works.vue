<template>
  <div id="artists-and-works" class="mobile-info">

    <div class="mobile-search">
      <input type="text">      
    </div>

    <div class="imgs">

      <div class="left">
        <div v-for="(item,index) in left" :key="index">
          <img :src="'/static/works/' + item.src">
          <div class="info">
            <div>{{item.first}}</div>
            <div>{{item.second}}</div>
          </div>
        </div>
      </div>

      <div class="right">
        <div v-for="(item,index) in right" :key="index">
          <img :src="'/static/works/' + item.src">
          <div class="info">
            <div>{{item.first}}</div>
            <div>{{item.second}}</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { left, right } from '@/assets/data/artists-and-works'

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
  #artists-and-works {
    > .mobile-search {
      margin: 1rem 0;
    }
    > .imgs {
      display: flex;
      justify-content: space-between;
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
              font-size: 0.5rem;
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
