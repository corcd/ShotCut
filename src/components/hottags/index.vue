<template>
  <div class="hottags">
    <ul>
      <li>
        <span class="tags-title">#热门标签</span>
      </li>
      <li v-for="item in testTags" :key="item">
        <a>
          <span>{{item}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hottags",
  props: {
    tags: Object
  },
  data() {
    return {
      testTags: ["1", "2", "3", "4", "5", "6", "7", "8"]
    };
  }
};
</script>

<style lang="scss">
.hottags {
  width: 100%;
  height: 60px;
  background: rgba(242, 242, 242, 1);

  ul {
    height: 60px;
    position: absolute;
    left: 5.5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    li {
      margin-left: 20px;
      margin-right: 20px;

      .tags-title {
        font: {
          size: 16px;
          family: MicrosoftYaHei;
          weight: 400;
        }
        height: 15px;
        margin-left: 0;
        color: rgba(102, 102, 102, 1);
        line-height: 19px;
      }

      .tags-item {
        font: {
          size: 16px;
          family: MicrosoftYaHei;
          weight: 400;
        }
        height: 15px;
        color: rgba(51, 51, 51, 1);
        line-height: 19px;
      }
    }
  }
}
</style>
