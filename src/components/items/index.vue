<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge,'items-small':isSmall}"
    ref="item"
    :id="data.id"
    @click="linkToPlayer(data)"
    @mouseover="mouseIn()"
    @mouseout="mouseOut()"
  >
    <div class="items-cover">
      <img alt="bmp" :src="data.poster" v-if="!isLarge">
      <img alt="bmp" :src="data.cover" v-if="isLarge">
    </div>
    <p v-bind:class="{'items-selected':isHover}">{{data.title}}</p>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {
    isLarge: { type: Boolean, default: false },
    isSmall: { type: Boolean, default: false },
    data: Object
  },
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    mouseIn() {
      this.isHover = true;
    },
    mouseOut() {
      this.isHover = false;
    },
    getDetails(e) {
      console.log(e.target.getAttribute("test"));
      console.log(e.target.getAttribute("url"));
      console.log(e.target.getAttribute("id"));
      let ele = this.$refs.item;
      console.log(ele.id + "-" + ele.url);
    },
    linkToPlayer(obj) {
      let testData = {
        title: obj.title,
        poster: obj.poster,
        amount: obj.amount,
        source: [
          {
            withCredentials: false,
            type: obj.type,
            src: obj.video_url
          }
        ]
      };
      this.$router.push({
        path: "/player",
        query: { data: testData }
      });
    }
  },
  watch: {}
};
</script>

<style lang="scss">
.items-large {
  width: 100% !important;
  margin-right: 1.1% !important;
  margin-left: 1.1% !important;
}

.items-small {
  width: 17% !important;
  margin-bottom: 1% !important;
  margin-right: 1.4% !important;
  margin-left: 1.4% !important;
}

.items-selected {
  color: rgba(255, 186, 116, 1) !important;
}

.items {
  width: 12%;
  height: auto;
  margin-right: 1.1%;
  margin-left: 1.1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  .items-cover {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 3px 3px #ffffff inset;
    }

    img {
      width: 100%;
      background-color: gray;
    }
  }

  p {
    width: 100%;
    height: 42px;
    margin-top: 1%;
    word-break: normal;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: left;
    font: {
      size: 13px;
      family: MicrosoftYaHei;
      weight: 400;
    }
    color: rgb(80, 79, 79);
    line-height: 18px;
    letter-spacing: 1px;
    cursor: pointer;
  }
}
</style>
