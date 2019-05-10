<template>
  <div class="test-page">
    <p>{{this.$store.state.testData.content}}</p>
    <rankicon></rankicon>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    console.log(this.$store.state.webData.background.data);
  }
};
</script>

<style lang="scss">
.test-page {
}
</style>
