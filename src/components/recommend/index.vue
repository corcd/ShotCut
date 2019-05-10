<template>
  <div class="recommend">
    <h3>推荐视频</h3>
    <div class="recommend-list">
      <div class="recommend-item" v-for="item in data" :key="item.id" @click="linkToPlayer(item)">
        <el-row>
          <el-col :span="12">
            <img alt="video-picture" :src="item.poster">
          </el-col>
          <el-col :span="12">
            <p>{{item.title}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  inject: ['reload'],
  props: {
    data: Array
  },
  data() {
    return {
      testItems: [
        {
          id: 1,
          src: "../../../static/images/test.png",
          content: "11111111111111111111111111111"
        },
        {
          id: 2,
          src: "../../../static/images/test.png",
          content: "22222222222222222222222222222"
        }
      ]
    };
  },
  methods: {
    linkToPlayer(obj) {
      console.log(obj.id);
      let testData = {
        title: obj.title,
        poster: obj.poster,
        amount: obj.amount,
        source: [
          {
            type: obj.type,
            src: obj.video_url
          }
        ]
      };
      localStorage.setItem("shotcut_videoData", JSON.stringify(testData));
      this.reload();
      window.scrollTo(0, 0);
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
    margin-top: 10px;

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
