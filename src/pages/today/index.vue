<template>
  <div class="home-page">
    <div class="header">
      <homeheader :scroll="true" :style_shade="true" :activeitem="activeitem"></homeheader>
      <hottags></hottags>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame :title="'怪咖一休哥'"></frame>
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
      activeitem: ["",true,"","","","",""]
    }
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
