<template>
  <header :class="[headIsActive?'active':'', 'jh-head']">
    <div class="container clearfix">
      <div class="float-left">
        <a class="logo" href="/"></a>
      </div>
      <ul class="header-nav float-left nav">
        <li class="nav-item" :class="navigation==1?'active':''">
          <a class="nav-link" href="/">首页</a>
        </li>
        <li class="nav-item" :class="navigation==2?'active':''">
          <a class="nav-link" href="/professional">专家</a>
        </li>
        <li class="nav-item" :class="navigation==3?'active':''">
          <a class="nav-link" href="/enterprise">企业</a>
        </li>
        <li class="nav-item" :class="navigation==4?'active':''">
          <a class="nav-link" href="/periodical">期刊</a>
        </li>
        <li class="nav-item" :class="navigation==5?'active':''">
          <a class="nav-link" href="/answer">分答</a>
        </li>
        <li class="nav-item" :class="navigation==6?'active':''">
          <a class="nav-link" href="javascript:;">科技服务</a>
          <i class="icon-dropdown"></i>
          <div :class="[headIsActive?'active':'', 'dropdown']">
            <a href="/researchDemand">企业方服务</a>
            <a href="/science">技术方服务</a>
            <a href="/government">政府助研项目</a>
          </div>
        </li>
        <li class="nav-item" :class="navigation==7||navigation==8?'active':''">
          <a class="nav-link" href="/about">关于我们</a>
        </li>
      </ul>
      <div class="float-right user-option user-btn"  v-if="isLogin">
        <div :class="[headIsActive?'active':'', 'dropdown']">
          <a href="/user/password">修改密码</a>
          <a href="/user/demand/1">我的需求</a>
          <a href="/user/collect">我的收藏</a>
          <a href="/user/buy">我的购买</a>
          <a  @click="quit">退出登录</a>
        </div>
      </div>
      <div class="float-right user-option" >
        <a class="search-btn js-search" v-if="navigation!=11" v-bind:style="!isLogin?'margin-left: -2.8rem':'margin-left: -0.8rem'" href="javascript:;">搜索</a>
        <a v-if="!isLogin" class="logo-btn" href="/login">登录</a>
        <a v-if="!isLogin" class="register-btn" href="/registerPhone">注册</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      keyword: '',
      isLogin: ''
    }
  },
  props: {
    navigation: {
      type: Number,
      default: 1
    },
    headerActive: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    headIsActive: function () {
      return this.headerActive
    }
  },
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
