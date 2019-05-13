<template>
  <div class="search-page">
    <div class="header">
      <navbar
        :scroll="false"
        :style_shade="false"
        :menu_v="false"
        :extend="false"
        :activeitem="activeitem"
        :search="false"
      ></navbar>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div class="search-title">
          <div class="search-icon"></div>
          <span class="search-title-name">搜索结果</span>
        </div>
        <div class="search-item" v-for="item in result">
          <p>{{item.title}}</p>
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
      activeitem: ["", "", "", "", "", "", ""],
      data: {},
      keyWord: "",
      result: []
    };
  },
  created() {},
  mounted() {
    this.keyWord = this.$route.query.keyWord;
    this.data = this.$store.state.webData;
    for (let i in this.data) {
      if (this.data[i].data) {
        for (let j in this.data[i].data) {
          if (
            this.data[i].data[j] != undefined &&
            this.data[i].data[j].title.match(this.keyWord) != null
          ) {
            console.log(this.data[i].data[j].title);
            this.result.push(this.data[i].data[j]);
          }
        }
      } else {
        if (
          this.data[i].data != undefined &&
          this.data[i].data.title.match(this.keyWord) != null
        ) {
          console.log(this.data[i].data.title);
          this.result.push(this.data[i].data);
        }
      }
    }
    console.log(this.result);
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
