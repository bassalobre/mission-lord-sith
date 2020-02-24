export default {
  namespaced: true,
  state: {
    all: [
      { id: 1, name: "Test", favorite: true },
      { id: 2, name: "Test-2", favorite: false },
      { id: 3, name: "Test-3", favorite: true },
      { id: 4, name: "Test-4", favorite: false },
      { id: 5, name: "Test-5", favorite: true }
    ]
  },
  getters: {
    favorites: state => {
      return state.all.filter(gif => gif.favorite);
    }
  },
  mutations: {},
  actions: {}
};
