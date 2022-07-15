<template>
  <div>
    <div class="login">
        <div class="login-con">
            <span>账户登录</span>
            <el-tabs type="border-card">
            <el-tab-pane label="邮箱">
                <div class="email">
                    <div class="account">
                        <img src="http://www.ay1.cc/img?w=44&h=44">
                        <el-input v-model="input" placeholder="请输入您的邮箱"></el-input>
                    </div>
                    <div class="password">
                        <img src="http://www.ay1.cc/img?w=44&h=44">
                        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                    </div>
                    <el-row>
                        <el-button type="primary">登录</el-button>
                    </el-row>
                    <nuxt-link to="#">忘记密码</nuxt-link>
                </div>
                <div class="code">
                    <img src="http://www.ay1.cc/img?w=245&h=245">
                    <p>使用二维码登录</p>
                    </div>
            </el-tab-pane>
            <el-tab-pane label="手机">
                <div class="tel">
                    <div class="account">
                        <img src="http://www.ay1.cc/img?w=44&h=44">
                        <el-input   el-input v-model="input" placeholder="请输入您的手机号"></el-input>
                    </div>
                    <div class="password">
                        <img src="http://www.ay1.cc/img?w=44&h=44">
                        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
                    </div>
                    <el-row>
                        <el-button type="primary">登录</el-button>
                    </el-row>
                    <nuxt-link to="#">忘记密码</nuxt-link>
                </div>
                <div class="code">
                    <img src="http://www.ay1.cc/img?w=245&h=245">
                    <p>使用二维码登录</p>
                    </div>
            </el-tab-pane>
            </el-tabs>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 1080px;
  height: 790px;
  margin: 0 auto;
  margin-left: 100px;
  .login-con {
    width: 491px;
    height: 790px;
    margin-left: 416px;
    margin-top: 200px;
    span {
      font-size: 44px;
      font-family: Segoe UI-Black, Segoe UI;
      font-weight: 900;
      color: #1a1919;
      letter-spacing: 5px;
    }
    .el-tabs {
      width: 490px;
      height: 480px;
      border: 0;
      box-shadow: 0px 0px;
      ::v-deep .el-tabs__header {
        width: 352px;
        background: #f5f5f5;
        border-bottom: 0;
        margin-top: 50px;
        #tab-0 {
          width: 176px;
          height: 55px;
          font-size: 26px;
          font-family: Segoe UI-Black, Segoe UI;
          font-weight: 900;
          color: #666666;
          letter-spacing: 5px;
          text-align: center;
          padding-top: 10px;
        }
        #tab-1 {
          width: 176px;
          height: 55px;
          font-size: 26px;
          font-family: Segoe UI-Black, Segoe UI;
          font-weight: 900;
          color: #666666;
          letter-spacing: 5px;
          text-align: center;
          padding-top: 10px;
        }
      }
      ::v-deep .el-tabs__content {
                    width: 820px;
                    height: 425px;
                    #pane-1 {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .tel {
                            width: 492px;
                            height: 480px;
                            .account {
                                width: 492px;
                                height: 67px;
                                margin-top: 55px;   
                                display: flex;
                                justify-content: space-between;
                                img {
                                    padding-top: 15px;
                                    width: 44px;
                                    height: 44px;
                                    margin-right: 13px;
                                }
                                .el-input {
                                    width: 431px;
                                    height: 67px;
                                    .el-input__inner {
                                        width: 431px;
                                        height: 67px;
                                        font-size: 22px;
                                        font-family: Segoe UI-Semilight, Segoe UI;
                                        font-weight: normal;
                                        color: #666666;
                                        letter-spacing: 5px;
                                    }
                                }
                            }
                            .password {
                                width: 492px;
                                height: 67px;
                                margin-top: 40px;   
                                display: flex;
                                justify-content: space-between;
                                img {
                                    padding-top: 15px;
                                    width: 44px;
                                    height: 44px;
                                    margin-right: 13px;
                                }
                                .el-input {
                                    width: 431px;
                                    height: 67px;
                                    .el-input__inner {
                                        width: 431px;
                                        height: 67px;
                                        font-size: 22px;
                                        font-family: Segoe UI-Semilight, Segoe UI;
                                        font-weight: normal;
                                        color: #666666;
                                        letter-spacing: 5px;
                                    }
                                }
                            }
                            a {
                                display: inline-block;
                                text-decoration: none;
                                font-size: 26px;
                                margin-top: 95px;
                                margin-left: 210px;
                                font-family: Segoe UI-Black, Segoe UI;
                                font-weight: 900;
                                color: #666666;
                                letter-spacing: 5px;
                            }
                            .el-row {
                                width: 431px;
                                height: 67px;
                                .el-button {
                                    width: 431px;
                                    height: 67px;
                                    margin-left: 57px;
                                    margin-top: 66px;
                                    background: #4C6EF5;
                                    border-radius: 5px 5px 5px 5px;
                                    opacity: 1;
                                    font-size: 32px;
                                    font-family: Segoe UI-Black, Segoe UI;
                                    font-weight: 900;
                                    color: #FEFEFE;
                                    letter-spacing: 5px;
                                }
                            }
                        }
                        .code {
                            width: 300px;
                            height: 300px;
                            img {
                                margin-top: 40px;
                                margin-left: 40px;
                            }
                            p {
                                margin-top: 20px;
                                margin-left: 75px;
                                font-size: 22px;
                                font-family: Segoe UI-Semilight, Segoe UI;
                                font-weight: normal;
                                color: #666666;
                                letter-spacing: 3px;
                            }
                        }
                    }
                    #pane-0 {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .email {
                            width: 492px;
                            height: 480px;
                            .account {
                                width: 492px;
                                height: 67px;
                                margin-top: 55px;   
                                display: flex;
                                justify-content: space-between;
                                img {
                                    padding-top: 15px;
                                    width: 44px;
                                    height: 44px;
                                    margin-right: 13px;
                                }
                                .el-input {
                                    width: 431px;
                                    height: 67px;
                                    .el-input__inner {
                                        width: 431px;
                                        height: 67px;
                                        font-size: 22px;
                                        font-family: Segoe UI-Semilight, Segoe UI;
                                        font-weight: normal;
                                        color: #666666;
                                        letter-spacing: 5px;
                                    }
                                }
                            }
                            .password {
                                width: 492px;
                                height: 67px;
                                margin-top: 40px;   
                                display: flex;
                                justify-content: space-between;
                                img {
                                    padding-top: 15px;
                                    width: 44px;
                                    height: 44px;
                                    margin-right: 13px;
                                }
                                .el-input {
                                    width: 431px;
                                    height: 67px;
                                    .el-input__inner {
                                        width: 431px;
                                        height: 67px;
                                        font-size: 22px;
                                        font-family: Segoe UI-Semilight, Segoe UI;
                                        font-weight: normal;
                                        color: #666666;
                                        letter-spacing: 5px;
                                    }
                                }
                            }
                            a {
                                display: inline-block;
                                text-decoration: none;
                                font-size: 26px;
                                margin-top: 95px;
                                margin-left: 210px;
                                font-family: Segoe UI-Black, Segoe UI;
                                font-weight: 900;
                                color: #666666;
                                letter-spacing: 5px;
                            }
                            .el-row {
                                width: 431px;
                                height: 67px;
                                .el-button {
                                    width: 431px;
                                    height: 67px;
                                    margin-left: 57px;
                                    margin-top: 66px;
                                    background: #4C6EF5;
                                    border-radius: 5px 5px 5px 5px;
                                    opacity: 1;
                                    font-size: 32px;
                                    font-family: Segoe UI-Black, Segoe UI;
                                    font-weight: 900;
                                    color: #FEFEFE;
                                    letter-spacing: 5px;
                                }
                            }
                        }
                        .code {
                            width: 300px;
                            height: 300px;
                            img {
                                margin-top: 40px;
                                margin-left: 40px;
                            }
                            p {
                                margin-top: 20px;
                                margin-left: 75px;
                                font-size: 22px;
                                font-family: Segoe UI-Semilight, Segoe UI;
                                font-weight: normal;
                                color: #666666;
                                letter-spacing: 3px;
                            }
                        }
                    }
                }
    }
  }
}
</style>