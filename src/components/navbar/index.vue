<template>
  <div class="navbar">
    <div class="generalbar">
      <div class="logo">
        <img class="img_logo" alt="logo" src="../../assets/logo.png">
        <img class="img_brand" alt="brand" src="../../assets/brand.png">
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
    <div class="menubar">
      <ul class="menu">
        <li class="active">
          <a>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a>
            <span>今日热门</span>
          </a>
        </li>
        <li>
          <a>
            <span>月度排行</span>
          </a>
        </li>
        <li>
          <a>
            <span>时尚热度</span>
          </a>
        </li>
        <li>
          <a>
            <span>最佳笑点</span>
          </a>
        </li>
        <li>
          <a>
            <span>青春短剧</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    activeitem: Array
  },
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
      height: 40px;
      position: fixed;
      left: 140px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      .img_logo {
        width: 30px;
        height: 30px;
      }

      .img_brand {
        width: 48px;
        height: 30px;
        margin-left: 24px;
      }
    }

    .searchbar {
      width: 460px;
      height: 40px;

      input {
        width: 380px;
        height: 40px;
        color: #fff !important;
        background: rgba(153, 153, 153, 0.25);
        opacity: 0.6;
        border: 0;
        border-radius: 20px;

        &::placeholder {
          color: #fff;
        }
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

  .menubar {
    width: 100%;
    height: 30px;
    margin-top: 15px;

    ul {
      width: 100%;
      height: 30px;
      position: fixed;
      left: 140px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .active {
        margin-top: 2px;
        border-bottom: 2px solid;
        border-bottom-color: rgba(255, 127, 0, 1);

        a {
          span {
            color: rgba(255, 127, 0, 1);
          }
        }
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 29px;

        a {
          span {
            height: 15px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
