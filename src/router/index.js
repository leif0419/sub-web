import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SubConverter",
    component: () => import("../views/Subconverter.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
