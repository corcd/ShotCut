<template>
  <div class="rank-icon">
    <span v-bind:class="{'rank-span-hot':isHot}">{{number}}</span>
    <div class="sign">
      <div class="sign-top" v-bind:class="{'rank-icon-hot-top':isHot}"></div>
      <div class="sign-bottom" v-bind:class="{'rank-icon-hot-bottom':isHot}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rankicon",
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isHot: false
    };
  },
  created() {
    if (this.number == 1 || this.number == 2 || this.number == 3)
      this.isHot = true;
  }
};
</script>

<style lang="scss">
.rank-icon-hot-top {
  background-color: rgba(255, 85, 51, 1) !important;
}

.rank-icon-hot-bottom {
  border-color: transparent transparent rgba(255, 85, 51, 1) !important;
  border-style: none solid solid;
}

.rank-span-hot {
  color: #fff !important;
}

.rank-icon {
  width: 30px;
  height: 33px;

  span {
    position: relative;
    top: 26px;
    left: 9px;
    display: block;
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(255, 85, 51, 1);
    line-height: 21px;
    z-index: 1;
  }

  .sign {
    .sign-top {
      width: 30px;
      height: 20px;
      background-color: rgba(255, 238, 229, 1);
      display: block;
      z-index: 0;
    }

    .sign-bottom {
      border-color: transparent transparent rgba(255, 238, 229, 1);
      border-style: none solid solid;
      border-width: 0 0px 13px 10px;
      transform: rotate(180deg);
      display: block;
      height: 0;
      left: -10px;
      width: 30px;
      z-index: 0;
    }
  }
}
</style>
