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
        <p>{{data.title}}</p>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div class="items-row">
          <items v-for="item in data.data" :key="item.id" :data="item"></items>
        </div>
        <div class="items-paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-size="35"
            layout="total, prev, pager, next, jumper"
            :total="35"
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
  props: {},
  data() {
    return {
      data: {},
      activeitem: ["", "", "", "", "", "", ""],
      currentPage1: 1
    };
  },
  created() {},
  mounted() {
    this.data = this.$route.query.data;
    console.log(this.data);
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
