import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/Homepage.vue";
import TrainingPage from "../views/TrainingPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/train",
    name: "TrainPage",
    component: TrainingPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
