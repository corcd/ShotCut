<template>
  <div class="recommend">
    <h3>推荐视频</h3>
    <div class="recommend-list">
      <div class="recommend-item" v-for="item in testItems" :key="item.id" @click="linkToPlayer(param)">
        <el-row>
          <el-col :span="12">
            <img alt="video-picture" :src="item.src">
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
        { id: 1, src: "../../../static/images/test.png", content: "11111111111111111111111111111" },
        { id: 2, src: "../../../static/images/test.png", content: "22222222222222222222222222222" }
      ]
    };
  },
  methods: {
    linkToPlayer(param) {
      let testData = {
        title: "鸡你太美",
        source: [
          {
            type: "video/mp4",
            src:
              "https://38917.long-vod.cdn.aodianyun.com/u/38917/mp4/0x0/35652b3879534d41320a1282c7a20fed.mp4"
          }
        ]
      };
      this.$router.push({
        name: "player",
        params: { data: testData }
      });
    }
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
          width: 100%;
        }

        p {
          width: 100%;
          word-break: normal;
          white-space: pre-wrap;
          word-wrap: break-word;
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
