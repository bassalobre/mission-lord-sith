import GifService from "../../services/GifService";

const service = new GifService();

export default {
  namespaced: true,
  state: {
    all: [],
    search: "",
    offset: 0
  },
  getters: {
    favorites: state => state.all.filter(gif => gif.favorite)
  },
  mutations: {
    favoriteGif(state, { id }) {
      const gif = state.all.find(gif => gif.id === id);
      gif.favorite = true;
    },
    removeFavorite(state, { id }) {
      const gif = state.all.find(gif => gif.id === id);
      gif.favorite = false;
    },
    addGifs(state, { gifs, oldSearch }) {
      const incrementGifs = !oldSearch || oldSearch === state.search;
      const allGifs = state.all.concat(gifs);
      state.all = incrementGifs ? allGifs : gifs;
    },
    resetGifs(state) {
      state.all = [];
    },
    changeSearch(state, search) {
      state.search = search;
    },
    changeOffset(state) {
      state.offset = state.all.length;
    }
  },
  actions: {
    addGifToFavorites({ commit }, gif) {
      commit("favoriteGif", gif);
    },
    removeGifFromFavorites({ commit }, gif) {
      commit("removeFavorite", gif);
    },
    searchGifsOnApi({ state, commit }, oldSearch = null) {
      service
        .searchGif(state.search, state.offset)
        .then(({ data }) => {
          commit("addGifs", { gifs: data.data, oldSearch });
        })
        .catch(() => commit("resetGifs"));
    },
    cancelSearchPreviousRequest() {
      service.cancelSearch();
    },
    changeSearch({ state, commit, dispatch }, { target }) {
      const oldSearch = state.search;
      commit("changeSearch", target.value);
      if (target.value.length >= 3) {
        dispatch("cancelSearchPreviousRequest");
        dispatch("searchGifsOnApi", oldSearch);
      }
    },
    changeOffset({ commit }) {
      commit("changeOffset");
    }
  }
};
