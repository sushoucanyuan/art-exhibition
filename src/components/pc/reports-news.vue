<template>
  <div>
    <div class="news-container">
      <div class="news-item" v-for="item in news" :key="item.id" @click="$router.push({name: 'reports-detail', params:{type, id: item.id}})">
        <img class="news-img" :src="item.picurl">
        <p class="news-date">{{item.publishAt | formatDate}}</p>
        <p class="news-description"><img v-if="type == '0'" :src="require('@/assets/img/hot.gif')"> {{item.info | climp(44)}}</p>
      </div>
    </div>
    <el-pagination class="pagination" :total="count" :page-size="4" :current-page.sync="page" layout="prev, pager, next, total" @current-change="page_change"></el-pagination>
  </div>
</template>

<script>
  import climp from '@/mixins/climp'
  import formatDate from '@/mixins/formatDate'
  import { getNews, getNewsCount } from '@/api'

  export default {
    mixins: [formatDate,climp],
    props: ['type'],
    data() {
      return {
        news: [],
        page: 1,
        count: 0
      }
    },
    computed: {
      realPage() {
        return (this.page - 1) * 4
      }
    },
    methods: {
      getNews,
      getNewsCount,
      setData() {
        let page = this.realPage, type = this.type
        this.getNews({ type, page }).then(news => {
          this.news = news
        })
        this.getNewsCount({ type }).then(count => {
          this.count = count
        })
      },
      page_change() {
        this.setData()
      }
    },
    beforeMount() {
      this.setData()
    }
  }
</script>
