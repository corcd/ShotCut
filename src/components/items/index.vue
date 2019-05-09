<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge}"
    ref="item"
    :id="id"
    :url="url"
    test="test"
    @click="linkToPlayer()"
  >
    <img alt="bmp" :src="src">
    <p>{{instruction}}</p>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {
    isLarge: Boolean,
    id: Number,
    instruction: String,
    src: String,
    url: String
  },
  methods: {
    getDetails(e) {
      console.log(e.target.getAttribute("test"));
      console.log(e.target.getAttribute("url"));
      console.log(e.target.getAttribute("id"));
      let ele = this.$refs.item;
      console.log(ele.id + "-" + ele.url);
    },
    linkToPlayer() {
      let testData = {
        title: "鸡你太美",
        source: [{
          type: "video/mp4",
          src:
            "https://38917.long-vod.cdn.aodianyun.com/u/38917/mp4/0x0/35652b3879534d41320a1282c7a20fed.mp4"
        }]
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
  margin: 1.1%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 80%;
    background-color: gray;
  }

  p {
    width: 100%;
    text-align: left;
    width: 206px;
    font-size: 60%;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
  }
}
</style>
