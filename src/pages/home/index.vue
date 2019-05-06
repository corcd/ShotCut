<template>
  <div class="home-page">
    <div class="header">
      <homeheader></homeheader>
    </div>
    <div class="container">
      <div class="hottags" v-if="hot"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame :title="'怪咖一休哥'">
        </frame>
      </div>
    </div>
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
import homeheader from "./homeheader";
export default {
  components: {
    homeheader
  },
  data() {
    return {
      hot: false
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import './index';
</style>
