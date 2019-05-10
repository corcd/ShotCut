<template>
  <div class="scrollscreen">
    <el-carousel>
      <el-carousel-item v-for="item in data" :key="item.id">
        <img alt="bg" :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <newslist></newslist>
  </div>
</template>

<script>
export default {
  name: "scrollscreen",
  props: {
    data: Array
  }
};
</script>

<style lang="scss">
.scrollscreen {
  width: 100%;
  height: 100%;

  .el-carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
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
