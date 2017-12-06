<template>
  <mt-header id="back-header" fixed :title="title">
    <icon="back" @click="$router.back()">返回</mt-button>
  </mt-header>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss">
  @import "../../assets/theme.scss";

  .header {
    letter-spacing: 0.2rem;
    height: $mobile-header-height;
    background-color: $base-color;
    z-index: 99999;

    .button{
      margin: 0 1.5rem 0 0.5rem;
    }
  }
</style>
