<template>
  <div class="player-page">
    <div class="header">
      <navbar
        :scroll="false"
        :style_shade="false"
        :menu_v="false"
        :extend="false"
        :activeitem="activeitem"
      ></navbar>
      <div class="play-area">
        <div class="play-player">
          <video-player
            class="video-player-box vjs-custom-skin"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            customEventName="customstatechangedeventname"
          ></video-player>
        </div>
        <div class="play-info">
          <div class="play-details">
            <div class="play-title">
              <p>{{title}}</p>
            </div>
            <div class="play-append">
              <div class="play-share">
                <span>分享：</span>
                <a>
                  <img alt="wechat" src="../../assets/wechat.png">
                </a>
                <a>
                  <img alt="sina" src="../../assets/weibo.png">
                </a>
              </div>
              <div class="play-amount">
                <p>
                  浏览量：
                  <span>{{pageview}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="play-ad">
            <a>
              <img alt="ad" src="../../assets/ad.png">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <el-row>
          <el-col :span="18">
            <discuss></discuss>
          </el-col>
          <el-col :span="6">
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
import "../../assets/css/custom-player.scss";

export default {
  components: {},
  props: {},
  data() {
    return {
      title: "",
      activeitem: ["", "", "", "", "", "", ""],
      playerOptions: {
        // videojs options
        autoplay: false,
        muted: false,
        loop: false,
        language: "en",
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        aspectRatio: "16:9",
        fluid: true,
        sources: [],
        poster: "/static/images/test.png",
        notSupportedMessage: "无法播放",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullScreenToggle: true
        }
      },
      testData: {},
      pageview: 123456
    };
  },
  created() {
    let videoData = this.$route.params.data;
    console.log(videoData);
    this.title = videoData.title;
    this.playerOptions.sources = videoData.source;
    console.log(this.playerOptions);
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
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
      position: fixed;
      top: 0;
      z-index: 3;
    }

    .play-area {
      width: 100%;
      margin-top: 60px;
      background: rgba(26, 26, 26, 1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .play-player {
        width: 85%;
        background: #000;

        .video-js .vjs-big-play-button {
        }
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
              margin-right: 60px;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              a {
                img {
                  width: 22px;
                  height: 18px;
                  margin: 5px;
                }
              }
            }

            .play-amount {
            }
          }
        }

        .play-ad {
          float: right;
          margin-top: 14px;

          a {
            img {
              width: 480px;
              height: 100px;
            }
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

      .blank {
        width: 100%;
        height: 100%;
      }
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
