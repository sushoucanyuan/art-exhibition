<template>
  <div id="main">

    <header>
      <img class="logo" src="/static/logo.png" alt="东湖雕塑生态双年展" @click="$router.push({name: 'index'})">
      <nav>
        <router-link class="link" :to="{name: 'about-us'}" active-class="link-active">{{$t('m.aboutUs')}}</router-link>
        <router-link class="link" :to="{name: 'artists-and-works'}" active-class="link-active">{{$t('m.artistCollection')}}</router-link>
        <router-link class="link" :to="{name: 'reports'}" active-class="link-active">{{$t('m.news')}}</router-link>
        <router-link class="link" :to="{name: 'must-know'}" active-class="link-active">{{$t('m.notes')}}</router-link>
      </nav>
        <div class="lang">
          <el-select v-model="lang">
            <el-option v-for="lang in langOption" :key="lang.value" :label="lang.label" :value="lang.value"></el-option>
          </el-select>
        </div>
      <div class="pc-search">
        <input type="text" placeholder='搜索'>
      </div>
    </header>

    <main>
      <keep-alive>
        <transition>
          <router-view/>
        </transition>
      </keep-alive>
    </main>

    <footer>
      <div>
        <img class="logo" src="/static/logo.png" alt="东湖雕塑生态双年展">
      </div>
      <div>
        <div>
          <div>
            <p>{{$t('m.tel')}}</p>
            <p>{{$t('m.local')}}</p>
            <p>{{$t('m.address')}}</p>
          </div>
          <div>
            <p>{{$t('m.click')}}</p>
            <p>
              <img src="/static/footer/footer_1.png">
              <img src="/static/footer/footer_2.png">
              <img src="/static/footer/footer_3.png">
              <img src="/static/footer/footer_4.png">
            </p>
          </div>
        </div>
        <div>
          <div>
            <router-link class="link" tag="p" :to="{name: 'about-us'}">{{$t('m.aboutUs')}}</router-link>
            <router-link class="link" tag="p" :to="{name: 'artists-and-works'}">{{$t('m.artistCollection')}}</router-link>
            <router-link class="link" tag="p" :to="{name: 'reports'}">{{$t('m.news')}}</router-link>
            <router-link class="link" tag="p" :to="{name: 'must-know'}">{{$t('m.click')}}</router-link>
          </div>
          <div>
            <p>武汉天气</p>
            <p>16℃ | 7℃</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{$t('m.visit')}}</p>
            <p>{{$t('m.infomation')}}</p>
            <p>{{$t('m.artistic')}}</p>
            <p>{{$t('m.contact')}}</p>
          </div>
          <div>
            <p>© 东湖雕塑艺术馆</p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        langOption: [{
            value: 'zh-CN',
            label: '中文'
          },
          {
            value: 'en-US',
            label: 'English'
          }
        ],
        lang:'中文'
      }
    },
    watch: {
      lang(){
          this.$i18n.locale = this.lang;//关键语句
      }
    },
  }

</script>

<style scoped lang="scss">
  @import "../../assets/scss/theme_pc.scss";

  #main {
    >header {
      text-align: right;
      position: relative;
      height: $header-height;
      min-width: $main-width;
      background-color: #f9f9f9;
      >.logo {
        cursor: pointer;
        margin-top: 10px;
        width: 140px;
        position: absolute;
        left: 40px;
        top: 0;
      }
      >nav {
        display: inline-block;
        >.link {
          @mixin active {
            border-radius: 30px;
            color: #fff;
            background-color: #49c19b;
          }
          $height: 40px;
          color: $title-color;
          line-height: $height;
          display: inline-block;
          box-sizing: border-box;
          height: $height;
          margin: ($header-height - $height)/2 0;
          margin-right: 26px;
          padding: 0 20px;
          transition: 0.4s;
          &:hover {
            @include active;
          }
          &.link-active {
            @include active;
          }
        }
      }
      .pc-search {
        line-height: 30px;
        display: inline-block;
        width: 280px;
        margin: ($header-height - 30px) / 2 0;
        margin-right: 40px;
      }
      .lang{
        display: inline-block;
                width: 100px;
                        margin-right: 40px;
        top:10px
      }
    }
    >main {
      min-width: $main-width;
    }
    >footer {
      min-width: $main-width;
      background-color: $footer-backgroundColor;
      margin-top: 80px;
      padding-top: 20px;
      padding-bottom: 35px;
      >div {
        text-align: left;
        box-sizing: border-box;
        width: $main-width;
        margin: 0 auto;
        padding: 0 150px;
        &:nth-child(2) {
          $p-height: 24px;
          display: flex;
          justify-content: space-between;
          >div {
            font-size: 13px;
            display: inline-block;
            >div {
              &:first-child {
                height: 4 * $p-height;
                margin-bottom: 30px;
              }
              >p {
                line-height: $p-height;
              }
            }
            img {
              width: 25px;
            }
          }
        }
        >.logo {
          height: 80px;
        }
        .link {
          cursor: pointer;
        }
      }
    }
  }

</style>
