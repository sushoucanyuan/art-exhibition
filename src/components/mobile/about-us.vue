<template>
  <div id="about-us">

    <img src="static/about_us/header.png" data-rjs="3">

    <div class="info mobile-info">

      <mt-navbar class="info-navbar" v-model="selected">
        <mt-tab-item class="navbar-item" id="1">{{$t('m.aboutBiennale')}}</mt-tab-item>
        <mt-tab-item class="navbar-item" id="2">{{$t('m.wanted')}}</mt-tab-item>
        <mt-tab-item class="navbar-item" id="3">{{$t('m.designLogo')}}</mt-tab-item>
        <mt-tab-item class="navbar-item" id="4">{{$t('m.council')}}</mt-tab-item>
      </mt-navbar>

    <mt-tab-container class="info-container" v-model="selected">
      <mt-tab-container-item id="1">
        <aboutExhibition/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <callForPapers/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <logoDesign/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <committee/>
      </mt-tab-container-item>
    </mt-tab-container>

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
        selected: '1'
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
  @import "../../assets/scss/mobile/theme.scss";

  #about-us {
    > img {
      display: block;
      width: 100%;
      height: $swiper-height;
    }
    > .info {
      > .info-navbar {
        padding: 1.4rem 0 2rem;
        .navbar-item {
          padding: 0.75rem 0;
          &.is-selected {
            font-weight: bold;
            border-bottom: 0.2rem solid $mark-color;
            color: $mark-color;
          }
        }
      }
      > .info-container {
        margin-top: 1rem;
        div {
          > .img {
            text-align: center;
          }
          > .name {
            > p:first-child {
              font-weight: bold;
            }
          }
          h3,
          h4,
          p,
          img {
            margin-bottom: 0.8rem;
          }
          > h3 {
            color: $title-color;
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
          }
          > h4,
          > p {
            color: $content-color;
            font-size: 0.9rem;
            line-height: 1.6rem;
            letter-spacing: 0.1rem;
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
    }
  }
</style>
