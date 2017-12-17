<template>
  <div id="about-us">

    <img src="/static/about_us/header.png">

    <div class="main">

      <div class="info">
        <component :is="component"></component>
      </div>

      <div class="nav">
        <div v-for="(item, index) in links" :key="index">
          <a class="pc-link" :class="{'active': component == item.component}" @click="component = item.component">{{$t('m.'+ item.name)}}</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import aboutExhibition from '@/components/about-us/about-exhibition.vue'
  import callForPapers from '@/components/about-us/call-for-papers.vue'
  import logoDesign from '@/components/about-us/logo-design.vue'
  import committee from '@/components/about-us/committee.vue'

  export default {
    data() {
      return {
        links: [{
          name: 'aboutBiennale',
          component: 'aboutExhibition'
        }, {
          name: 'wanted',
          component: 'callForPapers'
        }, {
          name: 'designLogo',
          component: 'logoDesign'
        }, {
          name: 'council',
          component: 'committee'
        }],
        component: 'aboutExhibition'
      }
    },
    components: {
      aboutExhibition,
      callForPapers,
      logoDesign,
      committee
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/pc/theme.scss";

  #about-us {
    > img {
      display: block;
      width: 100%;
    }
    > .main {
      $nav-widh: 220px;
      $info-width: 680px;
      $space-betewwn: 60px;
      display: flex;
      justify-content: center;
      width: $main-width;
      margin: 50px auto 0;
      padding: 0 $main-padding;
      position: relative;
      > .info {
        width: $info-width;
        margin-right: $space-betewwn;
        > div {
          > .img {
            text-align: center;
          }
          > .name {
            > p {
              display: inline-block;
              &:first-child {
                width: 240px;
              }
            }
          }
          h3,
          h4,
          p,
          img {
            margin-bottom: 18px;
          }
          > h3 {
            color: $title-color;
            letter-spacing: 2px;
          }
          > h4,
          > p {
            color: $content-color;
            line-height: 26px;
            letter-spacing: 1px;
          }
          > p.indent {
            text-indent: 2em;
          }
          > img {
            display: block;
            width: 100%;
          }
        }
      }
      > .nav {
        width: $nav-widh;
        a {
          $height: 30px;
          font-size: 14px;
          line-height: $height;
          height: $height;
          margin: 5px 0;
          &.active {
            color: $mark-color;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
