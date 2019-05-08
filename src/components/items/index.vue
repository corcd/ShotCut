<template>
  <div
    class="items"
    v-bind:class="{'items-large':isLarge}"
    ref="items"
    :id="id"
    @click="getDetails()"
  >
    <img alt="bmp" src="../../assets/test.png">
    <p>{{instruction}}</p>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {
    isLarge: Boolean,
    id: Number,
    instruction: String
  },
  methods: {
    getDetails() {
      let ele = this.$refs.items;
      console.log(ele.id);
    }
  },
  watch:{
  }
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
  height: 12%;
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
