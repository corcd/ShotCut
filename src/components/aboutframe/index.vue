<template>
  <div class="aboutframe">
    <div class="about-title">
      <p>{{title}}</p>
    </div>
    <div class="about-content">
      <div class="about-left"></div>
      <div class="about-right"></div>
      <div class="about-main">
        <p>{{content[0]}}</p>
        <p>{{content[1]}}</p>
        <p>{{content[2]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutframe",
  props: {
    title: String,
    data: Array
  }
};
</script>
<style lang="scss">
.aboutframe {
  width: 100%;

  .about-title {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
    background: rgba(242, 242, 242, 1);

    p {
      font-size: 24px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  .about-content {
    width: 100%;

    .about-left,
    .about-right {
      width: 25%;
      height: 0;
      position: absolute;
    }

    .about-left {
      left: 0;
      //background-color: blue;
      background-color: #fff;
    }

    .about-right {
      right: 0;
      //background-color: red;
      background-color: #fff;
    }

    .about-main {
      margin: 60px 25%;
      height: 100%;

      p {
        text-indent: 2em;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 32px;
      }
    }
  }
}
</style>
