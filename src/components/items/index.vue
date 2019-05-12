<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge}"
    ref="item"
    :id="data.id"
    @click="linkToPlayer(data)"
  >
    <img alt="bmp" :src="data.poster">
    <p>{{data.title}}</p>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {
    isLarge: Boolean,
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
        name: "player",
        params: { data: testData }
      });
    }
  },
  watch: {}
};
</script>

<style lang="scss">
.items-large {
  width: 454px !important;
  height: 320px !important;

  img {
    width: 454px !important;
    height: 310px !important;
  }
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
    word-break: normal;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: left;
    font: {
      size: 60%;
      family: MicrosoftYaHei;
      weight: 400;
    }
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
    cursor: pointer;
  }
}
</style>
