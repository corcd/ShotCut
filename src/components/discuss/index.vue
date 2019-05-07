<template>
  <div class="discuss">
    <h3>评论</h3>
    <div class="discuss-login">
      <p>
        点击此处
        <a>
          <span class="discuss-login-link">登录</span>
        </a> 后方可发布评论
      </p>
      <div class="discuss-login-shortcut">
        <span>快捷登录：</span>
        <img alt="wechat">
        <img alt="sina">
      </div>
    </div>
    <div class="discuss-input" v-if="isLogin"></div>
    <div class="discuss-details">
      <p>暂无评论</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "discuss",
  props: {},
  data() {
    return {
      isLogin: false
    };
  }
};
</script>

<style lang="scss">
.discuss {
  width: 100%;

  h3 {
    font: {
      size: 24px;
      family: MicrosoftYaHei;
      weight: 400;
    }
    color: rgba(51, 51, 51, 1);
    line-height: 42px;
  }

  .discuss-login {
    height: 80px;
    margin-left: 68px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 2px;

    p {
      font: {
        size: 16px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      color: rgba(128, 128, 128, 1);
      line-height: 20px;
      margin-right: 80px;

      span {
        color: rgba(255, 85, 51, 1);
      }
    }

    .discuss-login-shortcut {
      display: inline;

      span {
        font: {
          size: 12px;
          family: MicrosoftYaHei;
          weight: 400;
        }
        color: rgba(179, 179, 179, 1);
        line-height: 20px;
      }
    }
  }

  .discuss-details {
    width: 100%;
    min-height: 200px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }
}
</style>
