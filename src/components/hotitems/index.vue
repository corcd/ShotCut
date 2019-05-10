<template>
  <div class="hotitems" ref="hotitem" :id="hotdata.rankid" @click="linkToPlayer()">
    <img alt="bmp" :src="hotdata.cover">
    <div class="hot-info">
      <rankicon :number="hotdata.rankid"></rankicon>
      <p>{{hotdata.info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotitems",
  props: {
    hotdata: Object
  },
  methods: {
    linkToPlayer() {
      let testData = {
        title: "鸡你太美",
        source: [
          {
            type: "video/mp4",
            src:
              "https://38917.long-vod.cdn.aodianyun.com/u/38917/mp4/0x0/35652b3879534d41320a1282c7a20fed.mp4"
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
.hotitems {
  width: 18%;
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 100%;
  }

  .hot-info {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .rank-icon {
      position: relative;
      top: -20px;
      margin-right: 8px;
    }

    p {
      width: 80%;
      height: 42px;
      max-height: 42px;
      margin-top: 4px;
      word-break: normal;
      white-space: pre-wrap;
      word-wrap: break-word;
      text-align: left;
      font: {
        size: 14px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(102, 102, 102, 1);
      line-height: 21px;
    }
  }
}
</style>
