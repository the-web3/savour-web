<template>
  <div>
    <div class="safe">
      <span>安全验证</span>
      <div class="dev"></div>
      <span>为了您的账户安全，请完成一下验证操作</span>
      <p>手机验证码</p>
      <div class="input">
        <input type="text" placeholder="请输入您的手机号" />
        <el-row>
          <el-button type="primary" class="code">获取验证码</el-button>
        </el-row>
      </div>
      <nuxt-link to="#">切换到谷歌验证器</nuxt-link>
      <el-row>
        <el-button type="primary" class="submit">提交</el-button>
      </el-row>
      <span>安全验证不可用</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.safe {
  width: 629px;
  height: 490px;
  margin-top: 110px;
  margin-left: 416px;
  span:nth-child(1) {
    font-size: 44px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #1a1919;
    letter-spacing: 5px;
  }
  .dev {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 411px;
    height: 10px;
    background: linear-gradient(270deg, #ffffff 0%, #f68b40 100%);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
  span:nth-child(3) {
    font-size: 24px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #343434;
    letter-spacing: 2px;
  }
  p {
    margin-top: 24px;
    margin-bottom: 13px;
    font-size: 28px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #343434;
    letter-spacing: 2px;
  }
  .input {
    width: 629px;
    height: 67px;
    margin-bottom: 17px;
    display: flex;
    justify-content: space-between;
    input {
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
    .el-row {
      display: inline-block;
      width: 174px;
      height: 67px;
      .code {
        width: 174px;
        height: 67px;
        background: #4c6ef5;
        border-radius: 5px 5px 5px 5px;
        opacity: 1;
        font-size: 24px;
        font-family: Segoe UI-Black, Segoe UI;
        font-weight: 900;
        color: #fefefe;
        letter-spacing: 2px;
      }
    }
  }
  a {
    font-size: 24px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 900;
    color: #4c6ef5;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .el-row {
    .submit {
      width: 431px;
      height: 67px;
      margin-top: 49px;
      margin-bottom: 25px;
      background: #4c6ef5;
      border-radius: 5px 5px 5px 5px;
      opacity: 1;
      font-size: 32px;
      font-family: Segoe UI-Black, Segoe UI;
      font-weight: 900;
      color: #fefefe;
      letter-spacing: 2px;
    }
  }
  span:nth-child(8) {
    margin-left: 119px;
    font-size: 24px;
    font-family: Segoe UI-Black, Segoe UI;
    font-weight: 700;
    color: #999999;
    letter-spacing: 1px;
  }
}
</style>