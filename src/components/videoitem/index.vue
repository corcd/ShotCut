<template>
  <div class="videoitem">
    <img class="video-cover" alt="cover" src>
    <div class="video-intro">
      <img>
      <p>{{testString}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoitem",
  props: {},
  data() {
    return {
      testString: "nihao"
    };
  }
};
</script>

<style lang="scss">
.videoitem {
  width: 100%;

  .video-cover {
    width: 312px;
    height: 416px;
  }

  .video-intro {
    img {
      width: 30px;
      height: 33px;
    }

    p {
      font: {
        size: 14px;
        family: MicrosoftYaHei;
        weight: 400;
      }
      max-width: 264px;
      color: rgba(102, 102, 102, 1);
      line-height: 21px;
    }
  }
}
</style>
