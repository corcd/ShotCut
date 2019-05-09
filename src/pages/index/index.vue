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
          <items
            v-for="item in testItems"
            :key="item.id"
            :instruction="item.title"
            :src="item.src"
            :id="item.id"
            :url="item.source_url"
          ></items>
        </div>
        <div class="items-paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
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
        {
          id: 1,
          src: "../../../static/images/test.png",
          title: "11111111",
          source_url: "#"
        },
        {
          id: 2,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 3,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 4,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 5,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 6,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 7,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 8,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 9,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 10,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        }
      ],
      currentPage1: 1,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  created() {
    let theme = this.$route.params.theme;
    console.log(theme);
  },
  methods: {
    handleSizeChange(val) {
      console.log("每页 ${val} 条");
    },
    handleCurrentChange(val) {
      console.log("当前页: ${val}");
    }
  }
};
</script>


<style lang="scss">
@import "./index";
</style>
