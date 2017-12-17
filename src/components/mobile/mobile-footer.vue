<template>
  <footer id="mobile-footer">
    <div>
      <img src="static/logo.png" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
    </div>
    <div>
      <div class="left">
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
    </div>
    <div class="third">
      <div>
        <p>{{$t('m.click')}}</p>
        <p>
          <img src="/static/footer/footer_1.png" data-rjs="3">
          <img src="/static/footer/footer_2.png" data-rjs="3">
          <img src="/static/footer/footer_3.png" data-rjs="3">
          <img src="/static/footer/footer_4.png" data-rjs="3">
        </p>        
      </div>
      <div>
        <p>© 东湖雕塑艺术馆</p>
      </div>
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
    .left{
      max-width: 70%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      > div {
        display: inline-block;
        font-size: 0.6rem;
        line-height: 1.4rem;
        vertical-align: bottom;
        &.third {
          align-items: center;
        }
        > img {
          width: 6.5rem;
        }
      }
    }
  }
</style>
