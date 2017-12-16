<template>
  <footer id="mobile-footer">
    <div>
      <img class="logo" src="static/logo_footer.png" data-rjs="3" alt="东湖雕塑生态双年展">
      <p>{{$t('m.local')}}</p>
      <p>{{$t('m.address')}}</p>
      <p>{{$t('m.tel')}}</p>
    </div>
    <div>
      <p>{{$t('m.visit')}}</p>
      <p>{{$t('m.infomation')}}</p>
      <p>{{$t('m.artistic')}}</p>
      <p>{{$t('m.contact')}}</p>
    </div>
  </footer>
</template>

<script>
  export default {

  }

</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #mobile-footer {
    margin-top: 4rem;
    padding: 1rem $main-padding 1.5rem;
    background-color: $footer-backgroundColor;
    >div {
      display: inline-block;
      font-size: 0.6rem;
      line-height: 1.4rem;
      vertical-align: bottom;
      >img {
        width: 6.5rem;
      }
    }
  }

</style>
