<template>
  <back id="more-works">

    <div class="mobile-info">
      <div class="work" v-for="(item, index) in works" :key="index">
        <img class="work-img" :src="'static/works/' + item.src">
        <div class="work-info">
          <div class="work-name">{{item.name}}</div>
          <div class="work-author">{{item.author}}</div>
          <div class="work-description">{{item.description}}</div>
        </div>
      </div>
    </div>

  </back>
</template>

<script>
  import { works } from '@/assets/data/works'
  import back from '@/components/mobile/back.vue'

  export default {
    data() {
      return {
        works
      }
    },
    components: {
      back
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/theme_mobile.scss";

  #more-works {
    .mobile-info {
      padding-top: $more-paddingTop;
      .work {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;
        > .work-img {
          width: 40%;
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