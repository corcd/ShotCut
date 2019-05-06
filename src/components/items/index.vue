<template>
  <div class="items">
    <img>
    <p>{{instruction}}</p>
  </div>
</template>

<script>
export default {
  name: 'items',
  props: {
    instruction: String
  }
};
</script>

<style lang="scss">
.items {
  img {
    width: 217px;
    height: 122px;
  }

  p {
    text-align: center;
    width: 205px;
  }
}
</style>
