export default {
  namespaced: true,
  state: {
    all: [
      {
        id: 1,
        name: "Sad",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: true
      },
      {
        id: 2,
        name: "Sad-2",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: false
      },
      {
        id: 3,
        name: "Sad-3",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: true
      },
      {
        id: 4,
        name: "Sad-4",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: false
      },
      {
        id: 5,
        name: "Sad-5",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: true
      },
      {
        id: 6,
        name: "Sad-6",
        src: "https://media.giphy.com/media/YPPI2Q6DAz4CohnPDD/giphy.gif",
        favorite: false
      }
    ]
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
    }
  },
  actions: {
    addGifToFavorites({ commit }, gif) {
      commit("favoriteGif", gif);
    },
    removeGifFromFavorites({ commit }, gif) {
      commit("removeFavorite", gif);
    }
  }
};
