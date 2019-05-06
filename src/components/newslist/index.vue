<template>
  <div class="newslist">
    <ul>
      <li>
        <a>
          <span>{{item[0]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[1]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[2]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[3]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[4]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[5]}}</span>
        </a>
      </li>
      <li>
        <a>
          <span>{{item[6]}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newslist",
  props: {},
  data() {
    return {
      item: [
        "女明星都在用的腮红减龄法 ",
        "东皇加张良plus！",
        "震惊！化完妆VS没化妆的差距竟然",
        "拒绝嘴唇干燥起皮，必备润唇膏实用测评",
        "男友习惯性打压你，是什么毛病？看她这样做",
        "发际线太高？试试女明星最爱的同款刘海",
        "拯救四眼妹！女明星的时髦眼镜妆，3分钟就学会"
      ],
      extra: ["", "双法坦组合全场横着走！", "", "", "", "", ""]
    };
  }
};
</script>

<style lang="scss">
.newslist {
  width: 420px;
  height: 448px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);

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
        height: 80px;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 1);
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
