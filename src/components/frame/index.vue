<template>
  <div class="frame">
    <div class="title">
      <div class="icon"></div>
      <span class="title-name">{{data.title}}</span>
      <a class="link-more" @click="linkToIndex(data)">更多></a>
    </div>
    <div class="content">
      <div v-if="exhibition">
        <div class="left-content">
          <div class="items-left-row">
            <items :data="data.data[0]" :isLarge="true"></items>
          </div>
        </div>
        <div class="right-content">
          <div class="items-right-row">
            <items
              v-for="item in data.data.slice(1, limit)"
              :key="item.id"
              :data="item"
              :isSmall="true"
            ></items>
          </div>
        </div>
      </div>
      <div v-if="!exhibition">
        <div class="right-content">
          <div class="items-row">
            <items v-for="item in data.data.slice(0, limit)" :key="item.id" :data="item"></items>
          </div>
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
      reactiveHeight: 0,
      reactiveWidth: 0
    };
  },
  created() {},
  mounted() {
    this.reactiveElement();
    window.onresize = () => {
      return (() => {
        this.reactiveElement();
      })();
    };
  },
  updated() {
    this.reactiveElement();
  },
  methods: {
    reactiveElement() {
      this.reactiveHeight = document.getElementsByClassName(
        "right-content"
      )[0].clientHeight-10;
      console.log(this.reactiveHeight);
    },
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

      &:hover {
        color: rgba(255, 186, 116, 1) !important;
      }
    }
  }

  .content {
    .left-content {
      width: 30%;
      float: left;
    }

    .right-content-min {
      width: 70%;
      float: right;
    }

    .left-content,
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;

      .items-left-row {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .items-right-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }

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
