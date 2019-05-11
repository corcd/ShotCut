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
      <div class="play-area" v-if="isReload">
        <div class="play-player">
          <video id="myVideo" class="video-js testplayer">
            <source :src="this.videoData.source.src" :type="this.videoData.source.type">
          </video>
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
                  <span>{{amount}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="play-ad" @click="googleAd()">
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
            <recommend :data="rcData" @changeVideoData="changeVideoData"></recommend>
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
  inject: ["reload"],
  props: {},
  data() {
    return {
      title: "",
      amount: 0,
      activeitem: ["", "", "", "", "", "", ""],
      rcData: this.$store.state.webData.RecommendedVideos.data,
      videoData: {},
      isReload: true
    };
  },
  created() {
    this.videoData = this.$route.params.data;
    console.log(this.videoData);
    if (this.videoData == {} || this.videoData == undefined) {
      this.videoData = JSON.parse(localStorage.getItem("shotcut_videoData"));
    } else {
      localStorage.setItem("shotcut_videoData", JSON.stringify(this.videoData));
    }
    this.title = this.videoData.title;
    this.amount = this.videoData.amount;
    console.log(this.videoData.source);
  },
  mounted() {
    let myPlayer = this.$video(myVideo, {
      controls: true,
      loop: false,
      autoplay: false,
      //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      preload: "auto"
    });
  },
  destroyed() {},
  computed: {},
  methods: {
    googleAd() {
      window.open(
        "https://www.google.com/adsense/start/#/?modal_active=none",
        "_blank"
      );
    },
    changeVideoData(recommendData) {
      this.videoData = recommendData;
      localStorage.setItem("shotcut_videoData", JSON.stringify(this.videoData));
      console.log(this.videoData);

      this.isReload = false;

      this.$nextTick(() => {
        this.title = this.videoData.title;
        this.amount = this.videoData.amount;
        this.playerOptions.poster = this.videoData.poster;
        this.playerOptions.sources = this.videoData.source;
        this.isReload = true;
      });
    }
  },
  watch: {}
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

        .testplayer {
          width: 100%;
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
              margin-right: 40px;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              a {
                img {
                  width: 22px;
                  height: 18px;
                  margin: 5px;
                  margin-top: 10px;
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
