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
      isReload: true,
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
        notSupportedMessage: "遇到问题，视频无法播放",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullScreenToggle: true
        }
      },
      pageview: 0
    };
  },
  created() {},
  mounted() {
    this.videoData = this.$route.params.data;
    console.log(this.videoData);
    if (this.videoData == {}) {
      this.videoData = JSON.parse(localStorage.getItem("shotcut_videoData"));
    } else {
      localStorage.setItem("shotcut_videoData", JSON.stringify(this.videoData));
    }
    this.title = this.videoData.title;
    this.amount = this.videoData.amount;
    this.playerOptions.poster = this.videoData.poster;
    this.playerOptions.sources = this.videoData.source;

    console.log("this is current player instance object", this.player);
    console.log(this.rcData);
  },
  destroyed() {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
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
  watch: {
    $route: {
      handler(val) {
        let obj = val.params.data;
        console.log("watch:" + obj);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="scss">
@import "./index";
</style>
