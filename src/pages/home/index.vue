<template>
  <div class="home-page">
    <div class="header">
      <homeheader></homeheader>
    </div>
    <div class="container">
      <div class="hottags" v-if="hot"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame :title="'怪咖一休哥'">
        </frame>
      </div>
    </div>
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
import homeheader from "./homeheader";
export default {
  components: {
    homeheader
  },
  data() {
    return {
      hot: false
    };
  },
  methods: {}
};
</script>


<style lang="scss">
.home-page {
  width: 100%;
  min-width: 550px;
  height: 100%;

  .header {
    width: 100%;
  }

  .container {
    width: 100%;

    .left, .right {
      width: 140px;
      height: 0;
      position: absolute;
    }

    .left {
      left: 0;
      //background-color: blue;
      background-color: #FFF;
    }

    .right {
      right: 0;
      //background-color: red;
      background-color: #FFF;
    }

    .main {
      margin: 55px 140px;
      height: 100%;
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
