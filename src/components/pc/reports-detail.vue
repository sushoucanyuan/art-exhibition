<template>
  <div id="reports-detail">

    <div class="pc-subpage-container">

      <div>
        <el-breadcrumb class="pc-subpage-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'reports'}">{{$t('m.news')}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{$t('m.'+ name)}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="page">
        <h4>{{news.title}}</h4>
        <div class="date">{{news.publishAt | formatDate}}</div>
        <div class="content" v-html="news.content"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import formatDate from '@/mixins/formatDate'
  import { getNew } from '@/api'

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
    computed: {
      name() {
        switch (this.type) {
          case (0): return 'hotNews'
          case (1): return 'latests'
          case (2): return 'related'
        }
      }
    },
    methods: {
      getNew
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
  @import "../../assets/scss/pc/main.scss";
  @import "../../assets/scss/pc/theme.scss";

  #reports-detail {
    > .pc-subpage-container {
      > .link {
        cursor: pointer;
        margin: 30px 0 60px 10px;
        .pc-link {
          font-size: 14px;
          line-height: 24px;
        }
      }
      > .page {
        padding: 0 50px;
        text-align: center;
        letter-spacing: 2px;
        > h4 {
          font-size: 24px;
        }
        > .date {
          font-size: 12px;
          margin: 20px 0;
        }
        > .content {
          line-height: 2;
          text-align: left;
        }
      }
    }
  }
</style>
