<template>
  <div class="player-page">
    <div class="header">
      <navbar></navbar>
      <div class="play-area">
        <div class="play-player"></div>
        <div class="play-info">
          <div class="play-details">
            <div class="play-title">
              <p>{{testTitle}}</p>
            </div>
            <div class="play-append">
              <div class="play-share">
                <span>分享：</span>
                <img alt="wechat">
                <img alt="sina">
              </div>
              <div class="play-amount">
                <p>
                  浏览量：
                  <span>3456</span>
                </p>
              </div>
            </div>
          </div>
          <div class="play-ad">
            <img alt="ad">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <el-row>
          <el-col :span="16">
            <discuss></discuss>
          </el-col>
          <el-col :span="8">
            <recommend></recommend>
          </el-col>
        </el-row>
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
    title: String
  },
  data() {
    return {
      testTitle: "想追我弟，先过我这关"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.player-page {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;

    .navbar {
      width: 100%;
      height: 90px;
      position: fixed;
      top: 0;
      z-index: 3;
      background: rgba(26, 26, 26, 1);

      .aggergationbar {
        display: inline;
      }

      .menubar {
        background: rgba(51, 51, 51, 1);
        opacity: 0.8;
      }
    }

    .play-area {
      width: 100%;
      height: 1050px;
      margin-top: 60px;
      background: rgba(26, 26, 26, 1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .play-player {
        width: 85%;
        height: 922px;
        background: #000;
      }

      .play-info {
        width: 85%;
        height: 128px;

        .play-details {
          float: left;

          .play-title {
            font: {
              size: 30px;
              family: MicrosoftYaHei;
              weight: 400;
            }
            margin-top: 30px;
            color: rgba(255, 255, 255, 1);
          }

          .play-append {
            display: flex;
            justify-content: flex-start;

            p,
            span {
              font: {
                size: 16px;
                family: MicrosoftYaHei;
                weight: 400;
              }
              color: rgba(153, 153, 153, 1);
              line-height: 42px;
            }

            .play-share {
              height: 100px;
              margin-right: 60px;
            }

            .play-amount {
            }
          }
        }

        .play-ad {
          float: right;
          margin-top: 14px;

          img {
            width: 480px;
            height: 100px;
          }
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
      margin: 35px 7%;
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
