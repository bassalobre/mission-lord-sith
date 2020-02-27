<template>
  <div class="container favorites">
    <div class="topbar">
      <sui-header size="huge" inverted>Favorites</sui-header>
      <sui-button
        size="big"
        color="blue"
        inverted
        icon="home"
        content="Home"
        @click="goToHome"
      />
    </div>
    <sui-divider inverted />
    <div class="main">
      <Gif v-for="gif in gifs" :gif="gif" :key="gif.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Gif from "@/components/Gif.vue";

export default {
  name: "Favorites",
  components: {
    Gif
  },
  computed: {
    ...mapGetters("gif", {
      gifs: "favorites"
    })
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
