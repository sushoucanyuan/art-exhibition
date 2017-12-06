<template>
  <div id="back">

    <mobile-header type="more"></mobile-header>

    <main class="mobile-main">
      <slot></slot>
      <mobile-footer/>
    </main>

  </div>
</template>

<script>
  import mobileHeader from '@/components/mobile/mobile-header.vue'
  import mobileFooter from '@/components/mobile/mobile-footer.vue'

  export default {
    components: {
      mobileHeader,
      mobileFooter
    }
  }
</script>