<template>
  <div class="home-header">
    <navbar :scroll="scroll" :style_shade="style_shade" :activeitem="activeitem"></navbar>
    <el-carousel :autoplay="false" arrow="never" indicator-position="none" ref="carousel">
      <el-carousel-item v-for="item in items" :key="item.id">
        <img alt="bg" :src="item.poster" @click="linkToPlayer(item)">
      </el-carousel-item>
    </el-carousel>
    <div class="newslist" id="newslist">
      <ul>
        <li
          v-bind:class="{'list-active':items[0].actived}"
          @mouseover="pauseCounter(0)"
          @mouseout="recoverCounter(0)"
          @click="linkToPlayer(items[0])"
        >
          <a>
            <span v-bind:class="{'span-active':items[0].actived}">{{items[0].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[1].actived}"
          @mouseover="pauseCounter(1)"
          @mouseout="recoverCounter(1)"
          @click="linkToPlayer(items[1])"
        >
          <a>
            <span v-bind:class="{'span-active':items[1].actived}">{{items[1].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[2].actived}"
          @mouseover="pauseCounter(2)"
          @mouseout="recoverCounter(2)"
          @click="linkToPlayer(items[2])"
        >
          <a>
            <span v-bind:class="{'span-active':items[2].actived}">{{items[2].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[3].actived}"
          @mouseover="pauseCounter(3)"
          @mouseout="recoverCounter(3)"
          @click="linkToPlayer(items[3])"
        >
          <a>
            <span v-bind:class="{'span-active':items[3].actived}">{{items[3].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[4].actived}"
          @mouseover="pauseCounter(4)"
          @mouseout="recoverCounter(4)"
          @click="linkToPlayer(items[4])"
        >
          <a>
            <span v-bind:class="{'span-active':items[4].actived}">{{items[4].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[5].actived}"
          @mouseover="pauseCounter(5)"
          @mouseout="recoverCounter(5)"
          @click="linkToPlayer(items[5])"
        >
          <a>
            <span v-bind:class="{'span-active':items[5].actived}">{{items[5].title}}</span>
          </a>
        </li>
        <li
          v-bind:class="{'list-active':items[6].actived}"
          @mouseover="pauseCounter(6)"
          @mouseout="recoverCounter(6)"
          @click="linkToPlayer(items[6])"
        >
          <a>
            <span v-bind:class="{'span-active':items[6].actived}">{{items[6].title}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeheader",
  props: {
    scroll: Boolean,
    style_shade: Boolean,
    activeitem: Array,
    data: Array,
    actived: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      counter: 0,
      timer: {},
      items: this.data
    };
  },
  created() {
    //console.log(this.data);
    this.items.forEach(item => {
      this.$set(item, "actived", false);
    });
    this.items[0].actived = true;
    this.counter++;

    this.timer = setInterval(() => {
      if (this.counter > 6) this.counter = 0;

      if (this.counter != 0) this.items[this.counter - 1].actived = false;
      else this.items[6].actived = false;

      this.items[this.counter].actived = true;
      this.$refs.carousel.setActiveItem(this.counter);
      this.counter++;
    }, 3000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  computed: {},
  methods: {
    pauseCounter(param) {
      let self = this;
      this.$nextTick(() => {
        clearInterval(this.timer);
        this.items.forEach(item => {
          self.$set(item, "actived", false);
        });
        this.items[param].actived = true;
        this.$refs.carousel.setActiveItem(param);
      });
    },
    recoverCounter(param) {
      this.counter = param;
      this.timer = setInterval(() => {
        if (this.counter == 7) this.counter = 0;

        if (this.counter != 0) this.items[this.counter - 1].actived = false;
        else this.items[6].actived = false;

        this.items[this.counter].actived = true;
        this.$refs.carousel.setActiveItem(this.counter);
        this.counter++;
      }, 3000);
    },
    linkToPlayer(obj) {
      let testData = {
        title: obj.title,
        poster: obj.poster,
        amount: obj.amount,
        source: [
          {
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
  }
};
</script>


<style lang="scss">
.list-active {
  width: 100% !important;
  height: 70px !important;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 1;
}

.span-active {
  font-size: 20px !important;
  font-family: MicrosoftYaHei-Bold !important;
  font-weight: bold !important;
  color: rgba(255, 85, 0, 0.9) !important;
}

.home-header {
  width: 100%;
  height: 600px;

  .navbar {
    position: fixed;
    top: 0;
    z-index: 3;
  }

  .el-carousel {
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    z-index: 1;

    .el-carousel__container {
      width: 100%;
      height: 100%;

      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 600px;
        margin: 0;
      }
    }
  }

  .newslist {
    width: 420px;
    height: 448px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    ul {
      width: 100%;
      height: 420px;
      text-align: left;

      li {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        transition: height 0.5s;

        a {
          span {
            margin-left: 24px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
}
</style>
