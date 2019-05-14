<template>
  <div class="hotitems" ref="hotitem" :id="hotdata.id" @click="linkToPlayer()">
    <img alt="bmp" :src="hotdata.poster">
    <div class="hot-info">
      <rankicon :number="hotdata.id"></rankicon>
      <p>{{hotdata.title}}</p>
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
    linkToPlayer() {}
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
      cursor: pointer;
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
      //cursor: pointer;
    }
  }
}
</style>
