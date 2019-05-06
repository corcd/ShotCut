<template>
  <div class="navbar">
    <div class="generalbar">
      <div class="logo">
        <img alt="logo">
        <span class="brand">短秀</span>
      </div>
      <div class="searchbar">
        <el-row>
          <el-col :span="20">
            <el-input v-model="searchContent" prefix-icon="el-icon-search" placeholder="请输入关键字"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button :click="getSearch()" round>搜索</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="user">
        <el-button icon="el-icon-user" circle></el-button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {},
  data() {
    return {
      searchContent: ""
    };
  },
  methods: {
    getSearch() {
      //搜索
      if (this.searchContent) {
        //...
      }
    }
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 120px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );

  .generalbar {
    width: 100%;
    margin-top: 10px;
    display: inline-flex;
    justify-content: center;

    .logo {
      position: fixed;
      left: 140px;

      img {
        width: 44px;
        height: 30px;
      }

      span {
        width: 48px;
        height: 23px;
        font-size: 24px;
        font-family: SourceHanSansCN-Light;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
    }

    .searchbar {
      width: 460px;
      height: 40px;

      input {
        width: 380px;
        height: 40px;
        background: rgba(153, 153, 153, 1);
        opacity: 0.25;
        border: 0;
        border-radius: 20px;
      }

      button {
        width: 80px;
        height: 40px;
        color: #fff;
        background: linear-gradient(
          30deg,
          rgba(255, 85, 51, 1) 0%,
          rgba(255, 108, 0, 1) 100%
        );
        border: 0;
        border-radius: 20px;
      }
    }
  }

  .user {
    position: fixed;
    right: 140px;

    button {
      width: 40px;
      height: 40px;
      background: rgba(204, 238, 255, 1);
      border-radius: 50%;
      border: 0;
    }
  }
}
</style>
