<template>
  <div class="index-page">
    <div class="header">
      <navbar
        :scroll="false"
        :style_shade="false"
        :menu_v="false"
        :extend="false"
        :activeitem="activeitem"
      ></navbar>
      <div class="index-title">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item class="active" :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div class="items-row">
          <items v-for="item in testItems" :key="item.id" :instruction="item.title" :id="item.id"></items>
        </div>
        <div class="items-paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String,
    items: Array
  },
  data() {
    return {
      testTitle: "怪咖一休哥",
      activeitem: ["", "", "", "", "", "", ""],
      testItems: [
        { id: 1, url: "#", title: "11111111" },
        { id: 2, url: "#", title: "22222222" },
        { id: 3, url: "#", title: "22222222" },
        { id: 4, url: "#", title: "22222222" },
        { id: 5, url: "#", title: "22222222" },
        { id: 6, url: "#", title: "22222222" },
        { id: 7, url: "#", title: "22222222" },
        { id: 8, url: "#", title: "22222222" },
        { id: 9, url: "#", title: "22222222" },
        { id: 10, url: "#", title: "22222222" }
      ],
      currentPage1: 1,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log("每页 ${val} 条");
    },
    handleCurrentChange(val) {
      console.log("当前页: ${val}");
    }
  }
};
</script>


<style lang="scss">
.index-page {
  width: 100%;
  min-width: 1050px;
  height: 100%;

  .header {
    width: 100%;

    .navbar {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 3;
    }

    .index-title {
      width: 100%;
      height: 80px;
      position: fixed;
      top: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: rgba(242, 242, 242, 1);

      .el-breadcrumb {
        display: flex;
        align-items: flex-end;
        margin-left: 7%;
        color: rgba(102, 102, 102, 1);
        font: {
          size: 14px;
          family: MicrosoftYaHei;
          weight: 400;
        }

        .active {
          font-size: 24px;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }

  .container {
    width: 100%;

    .left,
    .right {
      width: 7%;
      height: 0;
      position: absolute;
    }

    .left {
      left: 0;
      //background-color: blue;
      background-color: #fff;
    }

    .right {
      right: 0;
      //background-color: red;
      background-color: #fff;
    }

    .main {
      margin: 164px 7%;
      height: 100%;

      .items-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }

      .items-paging {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;

        .el-pagination {
          .el-pager li.active {
            color: rgba(255, 85, 51, 1);
          }
        }
      }
    }
  }

  .footer {
    width: 100%;

    .line {
      width: 100%;
      height: 2px;
      margin: 0;
      padding: 0;
      background: rgba(255, 85, 0, 1);
    }
  }
}
</style>
