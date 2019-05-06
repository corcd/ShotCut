<template>
  <div class="frame">
    <div class="title">
      <div class="icon"></div>
      <span class="title-name">{{title}}</span>
      <a class="link-more">更多></a>
    </div>
    <div class="content">
      <div class="left-content" v-if="isvideo">
        
      </div>
      <div class="right-content">
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
        <items :instruction="'hello'"></items>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frame",
  props: {
    title: String
  },
  data() {
    return {
      isvideo: false
    };
  }
};
</script>

<style lang="scss">
.frame {
  width: 100%;
  min-height: 400px;
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
      font-size: 30px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 42px;
    }

    .link-more {
      width: 41px;
      height: 15px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 42px;
    }
  }

  .content {
    .left-content,
    .right-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
