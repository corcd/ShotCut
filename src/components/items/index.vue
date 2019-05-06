<template>
  <div class="items">
    <img alt="bmp" :src="src">
    <p>{{instruction}}</p>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {
    instruction: String,
    src: String
  }
};
</script>

<style lang="scss">
.items {
  width: 217px;
  height: 150px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 217px;
    height: 122px;
    background-color: gray;
  }

  p {
    text-align: left;
    width: 205px;
  }
}
</style>
