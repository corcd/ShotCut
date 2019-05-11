<template>
  <div class="rank-page">
    <div class="header">
      <navbar
        :scroll="false"
        :menu_v="true"
        :style_shade="false"
        :extend="true"
        :activeitem="activeitem"
      ></navbar>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div>
          <div class="hot-title">
            <div class="hot-icon"></div>
            <span class="hot-title-name">热门短视频</span>
          </div>
          <div class="hot-row">
            <hotitems v-for="item in module_data_1" :hotdata="item" :key="item.id"></hotitems>
          </div>
        </div>
        <div>
          <div class="hot-title">
            <div class="hot-icon"></div>
            <span class="hot-title-name">短秀君推荐</span>
          </div>
          <div class="hot-row">
            <hotitems v-for="item in module_data_2" :hotdata="item" :key="item.id"></hotitems>
          </div>
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
  props: {},
  data() {
    return {
      module_data_1: this.$store.state.webData.monthly_rank.module_data_1,
      module_data_2: this.$store.state.webData.monthly_rank.module_data_2,
      activeitem: ["", "", true, "", "", "", ""],
      testItems: [
        {
          id: 1,
          data: {
            rankid: 1,
            cover: "../../../static/images/hot/test.png",
            info: "11111111111111111"
          }
        },
        {
          id: 2,
          data: {
            rankid: 2,
            cover: "../../../static/images/hot/test.png",
            info: "222222222222222222222222222222222222222222"
          }
        },
        {
          id: 3,
          data: {
            rankid: 3,
            cover: "../../../static/images/hot/test.png",
            info: "222222222222222222222222222222222222222222"
          }
        },
        {
          id: 4,
          data: {
            rankid: 4,
            cover: "../../../static/images/hot/test.png",
            info: "222222222222222222222222222222222222222222"
          }
        },
        {
          id: 5,
          data: {
            rankid: 5,
            cover: "../../../static/images/hot/test.png",
            info: "222222222222222222222222222222222222222222"
          }
        },
        {
          id: 6,
          data: {
            rankid: 6,
            cover: "../../../static/images/hot/test.png",
            info: "222222222222222222222222222222222222222222"
          }
        }
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
