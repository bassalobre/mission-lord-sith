<template>
  <div class="container home">
    <div class="topbar">
      <sui-input
        size="big"
        placeholder="Search gifs..."
        icon="search"
        class="search-input"
        :value="search"
        @change="changeSearch"
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
    <sui-message info v-if="gifs.length === 0">No gif found !</sui-message>
    <div class="main">
      <Gif v-for="gif in gifs" :gif="gif" :key="gif.id" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Gif from "../components/Gif.vue";

export default {
  name: "Home",
  components: {
    Gif
  },
  computed: {
    ...mapState({
      gifs: state => state.gif.all,
      search: state => state.gif.search,
      offset: state => state.gif.offset
    })
  },
  mounted() {
    this.scroll();
  },
  beforeDestroy() {
    window.onscroll = () => {};
  },
  methods: {
    goToFavorites() {
      this.$router.push({ name: "Favorites" });
    },
    scroll() {
      window.onscroll = () => {
        const scrollY = window.scrollY;
        const visible = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const bottomOfPage = visible + scrollY >= pageHeight;
        if (bottomOfPage) {
          this.changeOffset();
          this.cancelSearchPreviousRequest();
          this.searchGifsOnApi();
        }
      };
    },
    ...mapActions("gif", [
      "searchGifsOnApi",
      "cancelSearchPreviousRequest",
      "changeSearch",
      "changeOffset"
    ])
  }
};
</script>

<style scoped>
.search-input {
  flex: 1;
  margin-right: 10px;
}
</style>
