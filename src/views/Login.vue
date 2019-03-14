<template>
  <div class="minHeight">
    <Head :headerActive="false"></Head>
    <div class="login-page" style="background-image:url(../images/login_bg.png)">
      <div class="login-box">
        <div class="left" style="background-image:url(../images/login_left_bg.png)">
          <h4>打造精准的知识交流和科技转化平台</h4>
        </div>
        <form @submit.prevent="login()">
          <div class="right">
            <div class="title">账号登录</div>
            <div class="item">
              <div class="tips">输入账号</div>
              <div class="text">
                <input placeholder="手机号/邮箱" v-model="userName">
              </div>
            </div>
            <div class="item">
              <div class="tips">输入密码</div>
              <div class="text">
                <input placeholder="密码" v-model="password" type="password">
              </div>
            </div>
            <div class="confirm">
              <div class="confirm-b">
                <a href="/registerPhone" style="color:#bd263b;text-decoration:underline">注册账号</a>
                <a href="/forgetPassword" style="color:##999">忘记密码？</a>
              </div>
              <button type="submit">登录</button>
            </div>
          </div>
        </form>
      </div>
      <div class="login-footer">
        <p>COPYRIGHT © 2018 上海简化信息科技有限公司</p>
        <p>沪ICP备12018056号-1</p>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Head from '@/components/Head'
import Sidebar from '@/components/Sidebar'
import { login } from '@/api/login'

export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login() {
      let _this = this
      login({
        userName: _this.userName,
        password: _this.password
      }).then(res => {
        window.localStorage.auth_token = res.data
        this.$message.success(res.message)
        this.$router.push('/')
      })
    }
  },
  components: {
    Head,
    Sidebar
  }
}
</script>

<style scoped>
</style>
