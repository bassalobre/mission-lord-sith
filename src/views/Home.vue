<template>
  <div class="home">
    <Gif v-for="gif in gifs" :name="gif.name" :key="gif.id" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gif from "@/components/Gif.vue";

export default {
  name: "Home",
  components: {
    Gif
  },
  computed: {
    ...mapState({
      gifs: state => state.gif.all
    })
  }
};
</script>
