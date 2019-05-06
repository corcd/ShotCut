<template>
  <div class="frame">
    <div class="title">
      <i></i>
      <h3 class="title-name"></h3>
      <a class="link-more"></a>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "frame",
  props: {
    title: String
  }
};
</script>

<style lang="scss">
.frame {
  background-color: #fff;
}
</style>
