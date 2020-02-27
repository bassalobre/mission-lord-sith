<template>
  <div class="container home">
    <div class="topbar">
      <sui-input
        size="big"
        placeholder="Search gifs..."
        icon="search"
        class="search-input"
      />
      <sui-button
        size="big"
        color="red"
        inverted
        icon="heart"
        content="Favorites"
        @click="goToFavorites"
      />
    </div>
    <div class="main">
      <Gif v-for="gif in gifs" :gif="gif" :key="gif.id" />
    </div>
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
  },
  methods: {
    goToFavorites() {
      this.$router.push({ name: "Favorites" });
    }
  }
};
</script>

<style scoped>
.search-input {
  flex: 1;
  margin-right: 10px;
}
</style>
