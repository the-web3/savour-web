<template>
  <div class="index-page">
    <div class="wallet-title-box">
      <h6>钱包总览</h6>
      <div class="btn-list-box">
        <el-button v-for="item in btnList" :key="item.name" :type="item.type">
          {{ item.name }}
        </el-button>
      </div>
    </div>
    <div class="wallet-content-box">
      <div class="wallet-left-content">
        <div class="total-box">
          <p class="title">总资产估值<i class="el-icon-view"></i></p>
          <p class="total">0.00036445BTC=$234.23</p>
        </div>
        <div class="my-assets">
          <div class="my-assets-title">
            <p class="title">我的资产</p>
            <div class="my-assets-hide-box">
              <el-checkbox v-model="hideWallet">隐藏资产账户</el-checkbox>
            </div>
          </div>
          <ul class="my-assets-list">
            <li class="my-assets-item" v-for="item in myAssets" :key="item.id">
              <div class="my-assets-item-title">
                <i :class="item.icon"></i>
                <p>{{ item.name }}</p>
              </div>
              <div class="my-assets-item-content">
                <p class="btc">{{ item.btc }}</p>
                <p class="price">{{ item.price }}</p>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="wallet-right-content">
        <div class="wallet-record-title">
          <p>近期充提记录</p>
          <el-button>查看全部记录</el-button>
        </div>
        <ul class="wallet-record-list">
          <li
            class="wallet-record-item"
            v-for="item in recordList"
            :key="item.id"
          >
            <div class="wallet-item-top">
              <div>
                <i v-if="item.type === 1" class="el-icon-upload2"></i>
                <i v-else class="el-icon-download"></i>
                <p>{{ item.type === 1 ? "充值" : "提现" }}</p>
              </div>
              <p>{{ item.price }}</p>
            </div>
            <div class="wallet-item-bottom">
              <p>{{ item.time }}</p>
              <p
                :class="{
                  success: item.status === 1,
                  error: item.status === 2,
                  complete: item.status === 3,
                }"
              >
                成功
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "admin",
  data() {
    return {
      btnList: [
        { type: "primary", name: "充值" },
        { type: "none", name: "提现" },
        { type: "none", name: "转账" },
        { type: "none", name: "钱包历史记录" },
      ],
      hideWallet: false,
      myAssets: [
        {
          id: 1,
          icon: "el-icon-suitcase",
          name: "现货账户",
          btc: "0.00036445BTC",
          price: "=$234.23",
        },
        {
          id: 2,
          icon: "el-icon-data-analysis",
          name: "杠杆账户",
          btc: "0.00036445BTC",
          price: "=$234.23",
        },
        {
          id: 3,
          icon: "el-icon-box",
          name: "合约账户（全仓）",
          btc: "0.00036445BTC",
          price: "=$234.23",
        },
        {
          id: 4,
          icon: "el-icon-news",
          name: "资金账户",
          btc: "0.00036445BTC",
          price: "=$234.23",
        },
        {
          id: 5,
          icon: "el-icon-bangzhu",
          name: "理财账户",
          btc: "0.00036445BTC",
          price: "=$234.23",
        },
      ],
      recordList: [
        {
          id: 1,
          type: 1,
          price: "+456USTD",
          time: "2022-02-02 19:34:33",
          status: 1,
        },
        {
          id: 2,
          type: 2,
          price: "-456USTD",
          time: "2022-02-02 19:34:33",
          status: 2,
        },
        {
          id: 3,
          type: 1,
          price: "+456USTD",
          time: "2022-02-02 19:34:33",
          status: 3,
        },
        {
          id: 4,
          type: 2,
          price: "+456USTD",
          time: "2022-02-02 19:34:33",
          status: 1,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  .wallet-title-box {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    background: rgba(245, 245, 245, 0.74);
    padding: 0 117px 0 32px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    h6 {
      font-size: 36px;
      line-height: 120px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #1a1919;
      margin: 0;
    }
    .btn-list-box {
      display: flex;
      align-items: center;
    }
  }
  .wallet-content-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 20px;
    .wallet-left-content {
      min-width: 600px;
      .total-box {
        padding-bottom: 10px;
        margin-right: 60px;
        border-bottom: 1px solid #707070;
        .title {
          font-size: 24px;
          font-family: Segoe UI-Black, Segoe UI;
          font-weight: 900;
          color: #343434;
          margin-bottom: 10px;
          i {
            margin-left: 8px;
          }
        }
        .total {
          font-size: 28px;
          font-family: Segoe UI-Black, Segoe UI;
          font-weight: 900;
          color: #343434;
        }
      }
      .my-assets {
        margin-top: 20px;
        .my-assets-title {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          font-family: Segoe UI-Black, Segoe UI;
          font-weight: 900;
          color: #343434;
        }
        .my-assets-list {
          min-width: 500px;
          padding-top: 20px;
          .my-assets-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            cursor: pointer;
            padding: 10px;
            &:hover {
              background-color: rgba(247, 247, 247, 1);
            }
            .my-assets-item-title {
              display: flex;
              align-items: center;
              font-size: 18px;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #383737;
              i {
                margin-right: 3px;
              }
            }
            .my-assets-item-content {
              display: flex;
              align-items: center;
              font-size: 18px;
              font-family: PingFang SC-Bold, PingFang SC;
              color: #383737;
              .btc {
                margin-right: 20px;
              }
              .price {
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
    .wallet-right-content {
      min-width: 360px;
      margin-right: 60px;
      margin-top: 30px;
      .wallet-record-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-family: Segoe UI-Black, Segoe UI;
        font-weight: 900;
        color: #343434;
        margin-bottom: 30px;
      }
      .wallet-record-list {
        width: 100%;
        .wallet-record-item {
          width: 100%;
          margin-bottom: 20px;
          .wallet-item-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            font-family: Segoe UI-Black, Segoe UI;
            font-weight: 900;
            color: #343434;
            margin-bottom: 10px;
            div {
              display: flex;
              align-items: center;
              i {
                margin-right: 5px;
              }
            }
          }
          .wallet-item-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #383737;
            .success {
              color: #00d463;
            }
            .error {
              color: #ff0000;
            }
            .complete {
              color: #5c7bf5;
            }
          }
        }
      }
    }
  }
}
</style>