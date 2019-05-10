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
                  <span>{{amount}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="play-ad" @click="testReload()">
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
            <recommend :data="rcData"></recommend>
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
  inject: ['reload'],
  props: {},
  data() {
    return {
      title: "",
      activeitem: ["", "", "", "", "", "", ""],
      rcData: this.$store.state.webData.SuggestedVideos.data,
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
        poster: "",
        notSupportedMessage: "无法播放",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullScreenToggle: true
        }
      },
      testData: {},
      pageview: 0
    };
  },
  created() {
    let videoData = this.$route.params.data;
    console.log(videoData);
    if (videoData == {}) {
      videoData = JSON.parse(localStorage.getItem("shotcut_videoData"));
    }
    this.title = videoData.title;
    this.amount = videoData.amount;
    this.playerOptions.poster = videoData.poster;
    this.playerOptions.sources = videoData.source;

    console.log(this.playerOptions);
    console.log(videoData);

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("shotcut_videoData", JSON.stringify(videoData));
    });
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    testReload() {
      this.reload();
    }
  }
};
</script>

<style lang="scss">
@import "./index";
</style>
