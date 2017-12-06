<template>
  <div id="pc">
    <keep-alive>
      <transition>
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import '@/pc.js'

  export default {
    name: 'pc'
  }
</script>

<style lang="scss">

</style>
