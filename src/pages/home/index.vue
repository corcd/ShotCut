<template>
  <div class="home-page">
    <div class="header">
      <homeheader :scroll="true" :style_shade="true" :activeitem="activeitem" :data="bgdata"></homeheader>
    </div>
    <div class="container">
      <div class="hottags" v-if="hot"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <frame :data="module_data">
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
      activeitem: [true,"","","","","",""],
      bgdata: this.$store.state.webData.background.data,
      module_data: this.$store.state.webData.module_data_1,
      bgdata_old: [
        {
          id: 1,
          title: "",
          src: "../../../static/images/bg/bg1.jpg"
        },
        {
          id: 2,
          title: "",
          src: "../../../static/images/bg/bg2.jpg"
        },
        {
          id: 3,
          title: "",
          src: "../../../static/images/bg/bg3.jpg"
        },
        {
          id: 4,
          title: "",
          src: "../../../static/images/bg/bg4.jpg"
        },
        {
          id: 5,
          title: "",
          src: "../../../static/images/bg/bg5.jpg"
        },
        {
          id: 6,
          title: "",
          src: "../../../static/images/bg/bg6.jpg"
        },
        {
          id: 7,
          title: "",
          src: "../../../static/images/bg/bg7.jpg"
        }
      ]
    };
  },
  created() {
    //console.log(this.$store.state.webData.background.data);
    //console.log(this.data);
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
