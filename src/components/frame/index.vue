<template>
  <div class="frame">
    <div class="title">
      <div class="icon"></div>
      <span class="title-name">{{data.title}}</span>
      <a class="link-more" @click="linkToIndex(data)">更多></a>
    </div>
    <div class="content">
      <div class="left-content" v-if="exhibition">
        <items :data="data.data[0]"></items>
      </div>
      <div class="right-content">
        <div class="items-row">
          <items v-for="item in data.data.slice(0, limit)" :key="item.id" :data="item"></items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frame",
  props: {
    exhibition: {
      type: Boolean,
      default: false
    },
    data: Object,
    limit: { type: Number, default: -1 }
  },
  data() {
    return {
    };
  },
  created() {},
  methods: {
    linkToIndex(d) {
      this.$router.push({
        path: "/index",
        query: { data: d }
      });
    }
  }
};
</script>

<style lang="scss">
.frame {
  width: 100%;
  min-height: 200px;
  margin-bottom: 35px;
  background-color: #fff;
  //border: 1px solid #456;

  .title {
    width: 400px;

    .icon {
      width: 30px;
      height: 10px;
      display: inline-block;
      margin-bottom: 15px;
      background: linear-gradient(
        30deg,
        rgba(255, 85, 51, 1) 0%,
        rgba(255, 108, 0, 1) 100%
      );
      border-radius: 5px;
    }

    .title-name {
      height: 30px;
      text-align: left !important;
      font: {
        size: 30px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(51, 51, 51, 1);
      line-height: 42px;
    }

    .link-more {
      width: 41px;
      height: 15px;
      margin-left: 10px;
      font: {
        size: 14px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(153, 153, 153, 1);
      line-height: 42px;
    }
  }

  .content {
    .left-content,
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;

      .items-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
