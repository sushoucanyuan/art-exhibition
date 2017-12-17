<template>
  <div id="back">

    <mobile-header type="more" :back="back"></mobile-header>

    <main class="mobile-main">
      <div style="min-height: 20rem;">
        <slot></slot>
      </div>
      <mobile-footer/>
    </main>

  </div>
</template>

<script>
  import mobileHeader from '@/components/mobile/mobile-header.vue'
  import mobileFooter from '@/components/mobile/mobile-footer.vue'

  export default {
    props:['back'],
    components: {
      mobileHeader,
      mobileFooter
    }
  }
</script>