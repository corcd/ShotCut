<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge,'items-small':isSmall}"
    ref="item"
    :id="data.id"
    @click="linkToPlayer(data)"
  >
    <img alt="bmp" :src="data.poster" v-if="!isLarge">
    <img alt="bmp" :src="data.cover" v-if="isLarge">
    <p>{{data.title}}</p>
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
  methods: {
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

.items {
  width: 12%;
  margin-right: 1.1%;
  margin-left: 1.1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 100%;
    background-color: gray;
    cursor: pointer;
  }

  p {
    width: 100%;
    height: 42px;
    margin-top: 4px;
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
