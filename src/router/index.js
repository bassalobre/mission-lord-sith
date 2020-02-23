import Vue from "vue";
import VueRouter from "vue-router";
import config from "../config";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favorites.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: config.BASE_URL,
  routes
});

export default router;
