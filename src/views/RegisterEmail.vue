<template>
  <div class="minHeight">
    <Head :headerActive="false"></Head>
    <div
      class="login-page"
      style="background-image:url(../images/login_bg.png)"
    >
      <div class="login-box">
        <div
          class="left"
          style="background-image:url(../images/login_left_bg.png)"
        >
          <h4>打造精准的知识交流和科技转化平台</h4>
        </div>
        <div class="right">
          <div class="title">注册账号</div>
          <div class="item">
            <div class="tips">邮箱</div>
            <div class="text">
              <input
                placeholder="请输入您的邮箱"
                @blur.prevent="verification()"
                v-model="userNumber"
              >
            </div>
          </div>
          <div class="item">
            <div class="tips">设置密码</div>
            <div class="text">
              <input
                placeholder="请输入您的密码，至少6个字符以上"
                type="password"
                v-model="password"
              >
            </div>
          </div>
          <div class="item">
            <div class="tips">输入验证码</div>
            <div class="text">
              <input
                placeholder="请输入验证码"
                style="width:2rem"
                v-model="verificationCode"
              >
              <button
                :class="['send_code', 'btn', sended?'disabled':'']"
                @click="sendVerificationCode()"
              >{{sended?seconds+"s":"发送验证码"}}</button>
            </div>
          </div>
          <div class="confirm">
            <button @click="register()">注册</button>
            <div class="confirm-b">
              <a href="/registerPhone">手机号注册</a>
              <a
                href="/login"
                style="color:#bd263b"
              >已有账号？去登录</a>
            </div>
          </div>
        </div>
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
import Head from "@/components/head"
import Sidebar from "@/components/Sidebar"
import { loginMixins } from "@/mixins/index"

export default {
  name: "registerEmail",
  data() {
    return {
      userNumber: "",
      password: "",
      verificationCode: ''
    };
  },
  mixins: [loginMixins],
  methods: {
    verification () {
      if (this.userNumber === null || this.userNumber === '') {
        this.$message.error('请输入邮箱！！！');
        return false;
      } else if (!/^([a-z0-9A-Z]+[-|_|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(this.userNumber)) {
        this.$message.error('请输入正确的邮箱！！！');
        return false;
      } else {
        if (this.isExist()) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  components: {
    Head,
    Sidebar
  }
};
</script>

<style scoped>
</style>
