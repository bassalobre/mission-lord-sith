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
        name: "Fight",
        src: "https://media.giphy.com/media/SsZViiaRCjgp8fVexU/giphy.gif",
        favorite: false
      },
      {
        id: 3,
        name: "Twerk",
        src: "https://media.giphy.com/media/xYqKJsgR6qZFK/giphy.gif",
        favorite: true
      },
      {
        id: 4,
        name: "Mad",
        src: "https://media.giphy.com/media/Ih7j3EzwCydUPTlOIZ/giphy.gif",
        favorite: false
      },
      {
        id: 5,
        name: "Happy",
        src: "https://media.giphy.com/media/el7VG1XOOvi24oRXFt/giphy.gif",
        favorite: true
      },
      {
        id: 6,
        name: "Dancing",
        src: "https://media.giphy.com/media/cOKjNdJDbqNCm4n0Jm/giphy.gif",
        favorite: false
      },
      {
        id: 7,
        name: "Bed",
        src: "https://media.giphy.com/media/TisLIMFzZJTzMFiCFC/giphy.gif",
        favorite: true
      },
      {
        id: 8,
        name: "Sleepy",
        src: "https://media.giphy.com/media/llZ2R6hwJVxWE/giphy.gif",
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
