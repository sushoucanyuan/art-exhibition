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
      <div v-if="high != undefined && low != undefined">
        <div class="weather">
          <img class="weather-img" src="/static/weather.png">
          <div>
            <div>武汉天气</div>
            <div>{{high}}℃ | {{low}}℃</div>
          </div>
        </div>
        <div class="weather-src">天气来源：心知天气</div>
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
  import { getWeather } from '@/api'

  export default {
    data() {
      return {
        high: undefined,
        low: undefined
      }
    },
    methods: {
      getWeather
    },
    beforeMount() {
      this.getWeather().then(({ high, low }) => {
        this.high = high
        this.low = low
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #mobile-footer {
    color: #4d4d4f;
    font-weight: bold;
    margin-top: 4rem;
    padding: 1rem $main-padding 1.5rem;
    background-color: $footer-backgroundColor;
    .left {
      max-width: 70%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      > div {
        display: inline-block;
        font-size: 0.6rem;
        line-height: 2rem;
        vertical-align: bottom;
        .weather {
          display: flex;
          align-items: flex-start;
          line-height: 1.8;
          .weather-img {
            width: 2.8rem;
            margin-right: 0.5rem;
          }
        }
        .weather-src{
          color: #808080;
        }
        > img {
          width: 6.5rem;
        }
      }
    }
  }
</style>
