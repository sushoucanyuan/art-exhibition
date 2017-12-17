<template>
  <back :back="back">
    <div id="reports-detail">
      <h4>{{news.title}}</h4>
      <div class="date">{{news.publishAt | formatDate}}</div>
      <div class="content" v-html="news.content"></div>      
    </div>
  </back>
</template>

<script>
  import formatDate from '@/mixins/formatDate'
  import { getNew } from '@/api'
  import back from '@/components/mobile/back.vue'

  export default {
    name: 'reports-detail',
    mixins: [formatDate],
    props: ['type', 'id'],
    data() {
      return {
        news: {
          id: '',
          title: '',
          publishAt: '',
          content: ''
        }
      }
    },
    methods: {
      getNew,
      back() {
        this.$router.push({ name: 'reports' })
      }
    },
    components: {
      back
    },
    beforeMount() {
      let id = this.id
      this.getNew({ id }).then(news => {
        this.news = news
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mobile/theme.scss";

  #reports-detail {
    padding-top: 3rem;
    padding-left: $main-padding;
    padding-right: $main-padding;
    h4 {
      font-size: 1.4rem;
    }
    .date {
      font-size: 0.8rem;
      margin: 1rem 0;
    }
    .content {
      line-height: 1.8;
      text-align: left;
      img {
        width: 100%;
      }
    }
  }
</style>
