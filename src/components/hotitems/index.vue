<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge}"
    ref="item"
    :id="id"
    :url="url"
    test="test"
    @click="getDetails($event)"
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
      console.log(e.target.getAttribute('test'));
      console.log(e.target.getAttribute('url'));
      console.log(e.target.getAttribute('id'));
      let ele = this.$refs.item;
      console.log(ele.id + "-" + ele.url);
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
  max-width: 312px;
  max-height: 416px;
  margin: 1%;
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
