<template>
  <div>
    <div class="register">
      <span>注册</span>
      <div class="dev"></div>
      <div class="tel">
        <img src="http://www.ay1.cc/img?w=44&h=44" />
        <input type="text" placeholder="请输入您的手机号" />
      </div>
      <div class="code">
        <img src="http://www.ay1.cc/img?w=44&h=44" />
        <input type="text" placeholder="请输入手机验证码" />
        <el-row>
          <el-button :disabled="disabled" @click="sendcode" class="sendcode">{{btntxt}}</el-button>
        </el-row>
      </div>
      <el-row>
        <el-button type="primary" class="reg">注册</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
 export default {
  data() {
   return {
    disabled: false,
    time: 60,
    btntxt: "发送验证码",
   };
  },
  methods: {
   sendcode() {
    this.time = 60;
    this.timer();
   },
   //发送手机验证码倒计时
   timer() {
    if (this.time > 0) {
     this.disabled = true;
     this.time--;
     this.btntxt = this.time + "秒";
     setTimeout(this.timer, 1000);
    } else {
     this.time = 0;
     this.btntxt = "发送验证码";
     this.disabled = false;
    }
   },
  }
 }
</script>

<style lang="less" scoped>
.register {
  width: 441px;
  height: 491px;
  margin-top: 110px;
  margin-left: 416px;
  span {
    font-size: 44px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #1a1919;
    letter-spacing: 5px;
  }
  .dev {
    width: 411px;
    height: 10px;
    margin-top: 20px;
    margin-bottom: 46px;
    background: linear-gradient(270deg, #ffffff 0%, #f68b40 100%);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
  .tel {
    width: 441px;
    height: 67px;
    display: flex;
    justify-content: space-between;
    img {
      width: 44px;
      height: 44px;
      padding-top: 13px;
    }
    input {
      margin-left: 20px;
      width: 431px;
      height: 67px;
      background: #ffffff;
      opacity: 1;
      border: 1px solid #999999;
      font-size: 22px;
      font-family: Segoe UI-Semilight, Segoe UI;
      font-weight: normal;
      color: #666666;
      letter-spacing: 2px;
      text-indent: 1em;
    }
  }
  .code {
    width: 441px;
    height: 67px;
    margin-top: 40px;
    margin-bottom: 66px;
    display: flex;
    justify-content: space-between;
    img {
      width: 44px;
      height: 44px;
      padding-top: 13px;
    }
    input {
      margin-left: 20px;
      width: 242px;
      height: 67px;
      background: #ffffff;
      opacity: 1;
      border: 1px solid #999999;
      font-size: 22px;
      font-family: Segoe UI-Semilight, Segoe UI;
      font-weight: normal;
      color: #666666;
      letter-spacing: 2px;
      text-indent: 1em;
    }
    .el-row {
      width: 174px;
      height: 67px;
      .sendcode {
        margin-left: 15px;
        width: 174px;
        height: 67px;
        background: #4c6ef5;
        border-radius: 5px 5px 5px 5px;
        opacity: 1;
        font-size: 24px;
        font-family: Segoe UI-Black, Segoe UI;
        font-weight: 900;
        color: #fefefe;
        letter-spacing: 1px;
      }
    }
  }
  .reg {
    width: 431px;
    height: 67px;
    margin-left: 65px;
    background: #4c6ef5;
    border-radius: 5px 5px 5px 5px;
    opacity: 1;
    font-size: 32px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #fefefe;
    letter-spacing: 5px;
  }
}
</style>