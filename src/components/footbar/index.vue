<template>
  <div class="footbar">
    <div class="infobar">
      <el-row>
        <el-col :span="6">
          <ul>
            <li>
              <h3>关于我们</h3>
            </li>
            <li>
              <a>
                <span>关于我们</span>
              </a>
            </li>
            <li>
              <a>
                <span>关于短秀</span>
              </a>
            </li>
            <li>
              <a>
                <span>加入我们</span>
              </a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <li>
              <h3>关注我们</h3>
            </li>
            <li>
              <a>
                <span>宴大小姐Vivi</span>
              </a>
            </li>
            <li>
              <a>
                <span>疯狂特效师</span>
              </a>
            </li>
            <li>
              <a>
                <span>王者皮皮怪</span>
              </a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <li>
              <h3>联系我们</h3>
            </li>
            <li>
              <a>
                <span>商务部 13077339188</span>
              </a>
            </li>
            <li>
              <a>
                <span>运营部 18033860808</span>
              </a>
            </li>
            <li>
              <a>
                <span>发行部 13337317601</span>
              </a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <img class="QRcode" alt="QRcode">
          </ul>
        </el-col>
      </el-row>
    </div>
    <div>
      <p>{{copyright}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footbar",
  props: {},
  data() {
    return {
      copyright: "ICP备案号为湘ICP备13006449号-3"
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.footbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 302px;
  background: rgba(242, 242, 242, 1);

  .infobar {
    width: 75%;

    .el-col {
      display: flex;
      justify-content: center;

      ul {
        text-align: left;

        h3 {
          height: 16px;
          margin-bottom: 30px;
          //text-align: center;
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(77, 77, 77, 1);
          line-height: 36px;
        }

        span {
          height: 12px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          text-decoration: none;
          color: rgba(102, 102, 102, 1);
          line-height: 36px;
        }

        .QRcode {
          width: 120px;
          height: 120px;
        }
      }
    }
  }

  p {
    width: 100%;
    height: 11px;
    margin-top: 30px;
    text-align: center;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 24px;
  }
}
</style>
