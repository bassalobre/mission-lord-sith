import GifService from "../../services/GifService";

const service = new GifService();

export default {
  namespaced: true,
  state: {
    all: []
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
    setGifs(state, gifs) {
      state.all = gifs;
    }
  },
  actions: {
    addGifToFavorites({ commit }, gif) {
      commit("favoriteGif", gif);
    },
    removeGifFromFavorites({ commit }, gif) {
      commit("removeFavorite", gif);
    },
    searchGifsOnApi({ commit }) {
      service.searchGif("morty").then(({ data }) => {
        commit("setGifs", data.data);
      });
    }
  }
};
