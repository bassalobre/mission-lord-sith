<template>
  <div class="gif">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Gif",
  props: {
    name: String
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
