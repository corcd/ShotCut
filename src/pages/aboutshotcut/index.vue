<template>
  <div class="about-page">
    <div class="header">
      <navbar></navbar>
    </div>
    <div class="container">
      <div class="about-title">
        <p>关于短秀</p>
      </div>
      <div class="about-content">
        <div class="about-left"></div>
        <div class="about-right"></div>
        <div class="about-main">
          <p>{{content[0]}}</p>
        </div>
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
  data() {
    return {
      content: [
        "	短秀介绍短秀网站视频内容将围绕文艺、娱乐、科技、财经、体育、教育等方向，生产制作相关内容的视频节目，目前已生产时尚美妆穿搭类、潮鞋类、街拍类、生活服务类、脱口秀类、健身情感类、特效类、游戏类、厨艺分享类、旅游类、美食类、情感短剧类、唱歌类等多个垂直领域的视听节目，为用户提供健康、实用、娱乐的视听服务，用视频的方式向人们展现美好生活。"
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
