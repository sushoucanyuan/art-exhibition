<template>
  <back id="more-artists-detail">
    
    <div class="mobile-info">
      <swiper class="swiper" :options="imgs_swiper">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="'static/index/' + item">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

  </back>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

</style>
