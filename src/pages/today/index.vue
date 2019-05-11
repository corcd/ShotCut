<template>
  <div class="today-page">
    <div class="header">
      <homeheader :scroll="true" :style_shade="true" :activeitem="activeitem" :data="bgdata"></homeheader>
      <hottags :tags="tags"></hottags>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame>
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
      activeitem: ["", true, "", "", "", ""],
      bgdata: this.$store.state.webData.background.data,
      tags: [
        { id: 1, text: "全部", param: "" },
        { id: 2, text: "美食", param: "" },
        { id: 3, text: "游戏", param: "" },
        { id: 4, text: "时尚", param: "" },
        { id: 5, text: "旅游", param: "" },
        { id: 6, text: "搞笑", param: "" },
        { id: 7, text: "情感", param: "" },
        { id: 8, text: "科技", param: "" }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
