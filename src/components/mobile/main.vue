<template>
  <div id="main">

    <mobile-header type="main"></mobile-header>

    <main class="mobile-main">
      <div style="min-height: 20rem；">
        <keep-alive>
          <transition>
            <router-view/>
          </transition>
        </keep-alive>        
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
    components:{
      mobileHeader,
      mobileFooter
    }
  }
</script>