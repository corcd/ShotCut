<template>
  <div class="recommend">
    <h3>推荐视频</h3>
    <div class="recommend-list">
      <div class="recommend-item">
        <el-row>
          <el-col :span="12">
            <img alt="video-picture">
          </el-col>
          <el-col :span="12">
            <p>111</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend"
};
</script>

<style lang="scss">
.recommend {
  width: 100%;

  h3 {
    font: {
      size: 24px;
      family: MicrosoftYaHei;
      weight: 400;
    }
    color: rgba(51, 51, 51, 1);
    line-height: 42px;
  }

  .recommend-list {
    width: 100%;

    .recommend-item {
      .el-col {
        margin-right: 20px;
      }

      img {
        width: 240px;
        height: 135px;
      }

      p {
        font: {
          size: 16px;
          family: MicrosoftYaHei;
          weight: 400;
        }
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
      }
    }
  }
}
</style>
