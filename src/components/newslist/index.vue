<template>
  
</template>

<script>
export default {
  name: "newslist",
  props: {
    actived: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      item: [
        {
          content: "女明星都在用的腮红减龄法 ",
          actived: false
        },
        {
          content: "东皇加张良plus！",
          actived: false
        },
        {
          content: "震惊！化完妆VS没化妆的差距竟然",
          actived: false
        },
        {
          content: "拒绝嘴唇干燥起皮，必备润唇膏实用测评",
          actived: false
        },
        {
          content: "男友习惯性打压你，是什么毛病？看她这样做",
          actived: false
        },
        {
          content: "发际线太高？试试女明星最爱的同款刘海",
          actived: false
        },
        {
          content: "拯救四眼妹！女明星的时髦眼镜妆，3分钟就学会",
          actived: false
        }
      ],
      extra: ["", "双法坦组合全场横着走！", "", "", "", "", ""]
    };
  },
  created() {
    let counter = 0;
    let timer = setInterval(() => {
      if (counter == 7) counter = 0;

      if (counter != 0) this.item[counter - 1].actived = false;
      else this.item[6].actived = false;

      this.item[counter].actived = true;
      counter++;
    }, 2000);
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

.newslist {
  width: 420px;
  height: 448px;
  display: flex;
  align-items: center;
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

      &:hover {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 1;

        a {
          span {
            font-size: 20px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(255, 85, 0, 1);
          }
        }
      }

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
</style>
