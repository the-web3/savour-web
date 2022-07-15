<template>
  <div class="admin-page-template">
    <navigator></navigator>
    <div class="admin-page-content">
      <el-row>
        <el-col :span="4">
          <div class="admin-left-navigator">
            <el-menu
              class="admin-menu-box"
              mode="vertical"
              active-text-color="#fff"
              :default-active="adtiveMenu"
              router
            >
              <el-menu-item
                v-for="item in menuList"
                :key="item.id"
                :index="item.id.toString()"
                :route="item.menuPath"
              >
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="admin-right-content">
            <nuxt />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminTemplate",
  data() {
    return {
      adtiveMenu: "1",
      menuList: [
        { id: 1, icon: "el-icon-tickets", name: "安全验证", menuPath: "/" },
        {
          id: 2,
          icon: "el-icon-suitcase",
          name: "现货账户",
          menuPath: {
            path: "/",
          },
        },
        {
          id: 3,
          icon: "el-icon-data-analysis",
          name: "杠杆账户",
          menuPath: "/",
        },
        { id: 4, icon: "el-icon-box", name: "合约账户", menuPath: "/" },
        { id: 5, icon: "el-icon-news", name: "资金账户", menuPath: "/" },
        {
          id: 6,
          icon: "el-icon-bangzhu",
          name: "理财账户",
          menuPath: "/",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.admin-page-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .admin-page-content {
    width: 100%;
    height: calc(100vh - 90px);
    .admin-left-navigator {
      height: calc(100vh - 90px);
      .admin-menu-box {
        height: 100%;
        ::v-deep .el-menu-item.is-active {
          background-color: #f68b40;
        }
      }
    }
    .admin-right-content {
      height: calc(100vh - 90px);
    }
  }
}
</style>