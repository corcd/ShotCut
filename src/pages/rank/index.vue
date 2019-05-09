<template>
  <div class="rank-page">
    <div class="header">
      <navbar :scroll="false" :menu_v="true" :style_shade="false" :extend="true" :activeitem="activeitem"></navbar>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div>
          <hotframe></hotframe>
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
  props: {
    title: String
  },
  data() {
    return {
      testTitle: "热门短视频",
      activeitem: ["","",true,"","","",""]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
