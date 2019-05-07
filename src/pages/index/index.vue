<template>
  <div class="index-page">
    <div class="header">
      <navbar></navbar>
      <div class="index-title">
        <p>{{testTitle}}</p>
      </div>
    </div>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main">
        <div class="items-row">
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
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String
  },
  data() {
    return {
      testTitle: "怪咖一休哥"
    };
  },
  methods: {}
};
</script>


<style lang="scss">
@import "./index";
</style>
