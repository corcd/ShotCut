<template>
  <div class="recommend">
    <h3>推荐视频</h3>
    <div class="recommend-list">
      <div class="recommend-item" v-for="item in testItems" :key="item.id">
        <el-row>
          <el-col :span="12">
            <img alt="video-picture">
          </el-col>
          <el-col :span="12">
            <p>{{item.content}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      testItems: [
        { id: 1, src: "#", content: "1" },
        { id: 2, src: "#", content: "2" }
      ]
    };
  }
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
          margin-left: 10px;
          color: rgba(51, 51, 51, 1);
          line-height: 30px;
        }
      }
    }
  }
}
</style>
