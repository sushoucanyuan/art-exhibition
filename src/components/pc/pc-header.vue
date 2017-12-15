<template>
  <header id="pc-header">
    <img class="logo" src="/static/logo_header.png" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
    <nav>
      <router-link class="pc-link" :to="{name: 'about-us'}" active-class="pc-link-active">关于我们</router-link>
      <router-link class="pc-link" :to="{name: 'artists-and-works'}" active-class="pc-link-active">参展艺术家·作品</router-link>
      <router-link class="pc-link" :to="{name: 'reports'}" active-class="pc-link-active">展览报道</router-link>
      <router-link class="pc-link" :to="{name: 'must-know'}" active-class="pc-link-active">观展须知</router-link>
    </nav>
    <div class="pc-search">
      <input type="text" placeholder="查询信息">
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
