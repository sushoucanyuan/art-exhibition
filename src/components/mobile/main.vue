<template>
  <div id="main">

    <mobile-header type="main"></mobile-header>

    <main class="mobile-main" :key="key">
      <div style="min-height: 20rem;">
        <router-view :key="key"/>
      </div>
      <mobile-footer/>
    </main>

  </div>
</template>

<script>
  import mobileHeader from '@/components/mobile/mobile-header.vue'
  import mobileFooter from '@/components/mobile/mobile-footer.vue'  

  export default {
    name: 'main',
    computed: {
      key() {
        // return this.$route.path.replace(/\//g, '_')
        return this.$route.name
      }
    },
    components:{
      mobileHeader,
      mobileFooter
    }
  }
</script>