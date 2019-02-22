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
          <div class="title">忘记密码</div>
          <div class="item">
            <div class="tips">手机号/邮箱</div>
            <div class="text">
              <input
                placeholder="请输入您的手机号/邮箱"
                @blur.prevent="notExist()"
                v-model="userName"
              >
            </div>
          </div>
          <div class="item">
            <div class="tips">设置新密码</div>
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
            <button @click="forgetPassword()">重置密码</button>
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
import Head from "@/components/head";
import Sidebar from "@/components/Sidebar";
import { loginMixins } from "@/mixins/index";
import { existence, forgetPassword } from "@/api/login";

export default {
  name: "forget",
  data() {
    return {
      userName: "",
      password: "",
      verificationCode: ""
    };
  },
  mixins: [loginMixins],
  methods: {
    verification () {
      let _this = this;
      if (_this.userName == null || _this.userName == "") {
        this.$message.error("请输入手机号码/邮箱");
        return false;
      } else {
        if (_this.userName.indexOf("@") != -1) {
          if (
            !/^([a-z0-9A-Z]+[-|_|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(
              _this.userName
            )
          ) {
            this.$message.error("请输入正确的邮箱");
            return false;
          }
        } else {
          if (!/^1[3|4|5|6|8|7][0-9]\d{4,8}$/.test(_this.userName)) {
            this.$message.error("请输入正确的手机号码");
            return false;
          }
        }
      }
      return true;
    },
    notExist () {
      let _this = this;
      if (this.verification()) {
        existence({
          userName: _this.userName
        }).then(res => {
          _this.isExist = true
        }).error(err => {
          _this.isExist = false
        })
      }
    },
    forgetPassword () {
      let _this = this;
      if (_this.isExist) {
        if (_this.password.length < 6) {
          this.$message.error("密码必须大于6个字符");
          return false;
        }
        if (_this.verificationCode.length !== 6) {
          this.$message.error("验证码必须等于6位");
          return false;
        }
        forgetPassword({
          userName: _this.userName,
          password: _this.password,
          code: _this.verificationCode
        }).then(res => {
          this.$message.success(res.message);
          this.$router.push("/login");
           this.$router.push("/login");
        })
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
