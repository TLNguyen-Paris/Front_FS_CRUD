import { createRouter, createWebHistory } from "vue-router";

import Home from "./../views/Home.vue";
// import Create_User from "./../views/Create_User.vue";
// import Read_User from "./../views/Read_User.vue";
// import Update_User from "./../views/Update_User.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
