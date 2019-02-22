import { register, sendVerificationCode, verifyAccount } from "@/api/login";

export const loginMixins = {
  data() {
    return {
      isExist: false,
      seconds: 59,
      sended: false,
      timer: ''
    }
  },
  methods: {
    _isExist () {
      let _this = this;
      verifyAccount({
        userName: _this.userNumber
      }).then(res => {
        _this.isExist = false
      }).error(err => {
        _this.isExist = true
      })
    },
    sendVerificationCode () {
      this.sended = true
      this.timer = setInterval(this.countDown, 1000)
      let _this = this;
      if (!_this.isExist && !_this.sended) {
        sendVerificationCode({
          userName: _this.userNumber
        }).then(res => {
        })
      }
    },
    countDown () {
      this.seconds--
      if (this.seconds <= 0) {
        clearInterval(this.timer)
        this.sended = false
        this.seconds = 59
      }
    },
    register () {
      let _this = this;
      if (_this.password.length < 6) {
        this.$message.error('密码必须大于6个字符！！！');
        return false;
      }
      if (_this.verificationCode.length !== 6) {
        this.$message.error('请输入正确的验证码！！！');
        return false;
      }
      register({
        userName: _this.userNumber,
        password: _this.password,
        code: _this.verificationCode
      }).then(res => {
        _this.$message.success(res.message);
        this.$router.push('/login')
      })
    }
  }
}
