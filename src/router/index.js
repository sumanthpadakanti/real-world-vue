import Vue from "vue";
import VueRouter from "vue-router";
import eventList from "../views/eventList.vue";
import eventShow from "../views/eventShow.vue";
import eventCreate from "../views/eventCreate.vue";
import user from "../views/user.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: eventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: eventShow,
    props: true
  },
  {
    path: "/event/create",
    name: "event-create",
    component: eventCreate,
  },
  {
    path: "/user/:username",
    name: "user-name",
    component: user,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
