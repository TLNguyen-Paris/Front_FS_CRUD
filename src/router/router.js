import { createRouter, createWebHistory } from "vue-router";

import Home from "./../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/create",
    name: "Create",
    component: () => import("./../views/Create_User.vue"),
  },
  {
    path: "/read",
    name: "Read",
    component: () => import("./../views/Read_User.vue"),
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./../views/Update_User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
