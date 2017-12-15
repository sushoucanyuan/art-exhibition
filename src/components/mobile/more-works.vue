<template>
  <back :back="back" id="more-works">

    <div class="main-container">
      <div class="work" v-for="item in works" :key="item.id">
         <div class="work-img">
          <img v-lazy="item.picurl">
        </div>
        <div class="work-info">
          <div class="work-name">{{item.name}}</div>
          <div class="work-author">{{item.authorname}}</div>
          <div class="work-description">{{item.info}}</div>
        </div>
      </div>
    </div>

  </back>
</template>

<script>
  import { getWorks } from '@/api'
  import back from '@/components/mobile/back.vue'

  export default {
    data() {
      return {
        works: []
      }
    },
    components: {
      back
    },
    methods: {
      getWorks,
      back() {
        this.$router.push({ name: 'artists-and-works' })
      }
    },
    beforeMount() {
      this.getWorks().then(works => {
        this.works = works
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #more-works {
    .main-container {
      padding-top: 2rem;
      padding-left: $main-padding;
      padding-right: $main-padding;
      .work {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;
        > .work-img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          background-color: $img-backgroundColor;
          > img {
            display: block;
            width: 100%;
            height: 100%;
            &[lazy="error"],
            &[lazy="loading"] {
              display: inline-block;
              width: 2rem;
              height: 2rem;
              margin: calc((100% - 2rem) /2) 0;
            }
          }
        }
        > .work-info {
          align-self: flex-start;
          width: 55%;
          > .work-name {
            font-size: 0.8rem;
            font-weight: bold;
            letter-spacing: 0.15rem;
            padding-top: 0.1rem;
          }
          > .work-author {
            font-size: 0.8rem;
            letter-spacing: 0.15rem;
            padding-bottom: 0.3rem;
          }
          > .work-description {
            opacity: 0.8;
            font-size: 0.7rem;
            line-height: 1.2rem;
            letter-spacing: 0.05rem;
          }
        }
      }
    }
  }
</style>