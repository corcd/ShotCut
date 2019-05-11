<template>
  <div class="frame">
    <div class="title">
      <div class="icon"></div>
      <span class="title-name">{{data.title}}</span>
      <a class="link-more" @click="linkToIndex(data.title)">更多></a>
    </div>
    <div class="content">
      <div class="left-content" v-if="isvideo">
        <items></items>
      </div>
      <div class="right-content">
        <div class="items-row">
          <items
            v-for="item in data.data"
            :key="item.id"
            :data="item"
          ></items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frame",
  props: {
    data: Object
  },
  data() {
    return {
      isvideo: false,
      testItems: [
        {
          id: 1,
          src: "../../../static/images/test.png",
          title: "11111111",
          source_url: "#"
        },
        {
          id: 2,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 3,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 4,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 5,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 6,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 7,
          src: "../../../static/images/test.png",
          title: "22222222222222222222222222222",
          source_url: "#"
        },
        {
          id: 8,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 9,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        },
        {
          id: 10,
          src: "../../../static/images/test.png",
          title: "22222222",
          source_url: "#"
        }
      ]
    };
  },
  methods: {
    linkToIndex(t) {
      let temp = t.replace(/\r\n/g, "\n");
      let utftext = "";
      for (let n = 0; n < temp.length; n++) {
        let c = temp.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      this.$router.push({
        name: "index",
        params: { token: utftext, theme: t }
      });
    }
  }
};
</script>

<style lang="scss">
.frame {
  width: 100%;
  min-height: 200px;
  margin-bottom: 35px;
  background-color: #fff;
  //border: 1px solid #456;

  .title {
    width: 400px;

    .icon {
      width: 30px;
      height: 10px;
      display: inline-block;
      margin-bottom: 15px;
      background: linear-gradient(
        30deg,
        rgba(255, 85, 51, 1) 0%,
        rgba(255, 108, 0, 1) 100%
      );
      border-radius: 5px;
    }

    .title-name {
      height: 30px;
      text-align: left !important;
      font: {
        size: 30px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(51, 51, 51, 1);
      line-height: 42px;
    }

    .link-more {
      width: 41px;
      height: 15px;
      margin-left: 10px;
      font: {
        size: 14px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(153, 153, 153, 1);
      line-height: 42px;
    }
  }

  .content {
    .left-content,
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;

      .items-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
