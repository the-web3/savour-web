<template>
  <div class="navigator">
    <div class="nav">
      <div class="nav-left">
        <img src="http://www.ay1.cc/img?w=81&h=40">
        <nuxt-link to="#">OTC</nuxt-link>
        <nuxt-link to="#">行情</nuxt-link>
        <nuxt-link to="#">量化</nuxt-link>
        <nuxt-link to="#">理财</nuxt-link>
        <nuxt-link to="#">金融业务</nuxt-link>
        <nuxt-link to="#">NFT</nuxt-link>
      </div>
      <div class="nav-right">
        <nuxt-link to="/login">登陆</nuxt-link>
        <nuxt-link to="/register">注册</nuxt-link>
        <nuxt-link to="/download">下载</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
  .navigator {
    width: 100%;
    height: 90px;
    background: #4C6EF5;
    opacity: 0.91;
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-left {
        display: flex;
        padding-left: 33px;
        align-items: center;
        a {
          line-height: 90px;
          margin-left: 72px;
          font-size: 28px;
          font-family: Segoe UI-Semilight, Segoe UI;
          color: #FFFFFF;
          text-decoration: none
        }
        a:nth-child(2) {
          margin-left: 58px;
        }
        a:nth-child(5) {
          margin-left: 73px;
        }
      }
      .nav-right {
        text-align: right;
        display: flex;
        padding-right: 178px;
        a {
          line-height: 90px;
          font-size: 24px;
          font-family: Segoe UI-Semilight, Segoe UI;
          color: #FFFFFF;
          text-decoration: none
        }
        a:nth-child(1) {
          margin-right: 86px;
        }
        a:nth-child(2) {
          margin-right: 92px;
        }
        a:nth-child(3) {
          font-size: 24px;
        }
      }
    }
  }
</style>