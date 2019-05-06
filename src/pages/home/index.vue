<template>
  <div class="home-page">
    <div class="header">
      <homeheader></homeheader>
    </div>
    <div class="container">
      <a></a>
    </div>
    <div class="footer">
      <div class="line"></div>
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
import homeheader from "./homeheader";
export default {
  components: {
    homeheader
  },
  methods: {}
};
</script>


<style lang="scss">
.home-page {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
  }

  .footer {
    width: 100%;

    .line {
      width: 100%;
      height: 2px;
      margin: 0;
      padding: 0;
      background: rgba(255, 85, 0, 1);
    }
  }
}
</style>
