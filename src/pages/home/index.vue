<template>
  <div class="home-page">
    <div class="header">
      <homeheader :scroll="true" :style_shade="true" :activeitem="activeitem"></homeheader>
    </div>
    <div class="container">
      <div class="hottags" v-if="hot"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame :title="'怪咖一休哥'">
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
      hot: false,
      activeitem: [true,"","","","","",""]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
