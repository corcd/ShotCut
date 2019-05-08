<template>
  <div class="home-header">
    <navbar :scroll="scroll" :style_shade="style_shade" :activeitem="activeitem"></navbar>
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <newslist></newslist>
  </div>
</template>

<script>
export default {
  name: "homeheader",
  props: {
    scroll: Boolean,
    style_shade: Boolean,
    activeitem: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss">
.home-header {
  width: 100%;
  height: 600px;

  .navbar {
    position: fixed;
    top: 0;
    z-index: 3;
  }

  .el-carousel {
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    z-index: 1;
    .el-carousel__container {
      width: 100%;
      height: 600px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 600px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }

  .newslist {
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 2;
  }
}
</style>
