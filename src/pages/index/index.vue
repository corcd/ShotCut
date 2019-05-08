<template>
  <div class="index-page">
    <div class="header">
      <navbar
        :scroll="false"
        :style_shade="false"
        :menu_v="false"
        :extend="false"
        :activeitem="activeitem"
      ></navbar>
      <div class="index-title">
        <p>{{testTitle}}</p>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div class="items-row">
          <items v-for="item in testItems" :key="item.id" :instruction="item.title" :id="item.id"></items>
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
    title: String,
    items: Array
  },
  data() {
    return {
      testTitle: "怪咖一休哥",
      activeitem: ["", "", "", "", "", "", ""],
      testItems: [
        { id: 1, url: "#", title: "11111111" },
        { id: 2, url: "#", title: "22222222" },
        { id: 3, url: "#", title: "22222222" },
        { id: 4, url: "#", title: "22222222" },
        { id: 5, url: "#", title: "22222222" },
        { id: 6, url: "#", title: "22222222" },
        { id: 7, url: "#", title: "22222222" },
        { id: 8, url: "#", title: "22222222" },
        { id: 9, url: "#", title: "22222222" },
        { id: 10, url: "#", title: "22222222" }
      ]
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
