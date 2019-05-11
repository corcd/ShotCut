<template>
  <div class="test-page">
    <p>{{this.$store.state.testData.content}}</p>
    <rankicon></rankicon>

    <video id="myVideo" class="video-js">
      <source
        src="https://38917.long-vod.cdn.aodianyun.com/u/38917/m3u8/adaptive/0b6faa0f032a98d426e913629284ee12.m3u8"
        type="application/x-mpegURL"
      >
    </video>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  created() {
    console.log(this.$store.state.webData.background.data);
  },
  mounted() {
    let myPlayer = this.$video(myVideo, {
      //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      controls: true,
      //自动播放属性,muted:静音播放
      autoplay: "muted",
      //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      preload: "auto",
      //设置视频播放器的显示宽度（以像素为单位）
      width: "800px",
      //设置视频播放器的显示高度（以像素为单位）
      height: "400px"
    });
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
      return this.$refs.vid1.player;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
.test-page {
}
</style>
