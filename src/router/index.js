import { createRouter, createWebHashHistory } from "vue-router";
import FoodDiary from "../views/FoodDiary.vue";
import Settings from "../views/Settings.vue";

const mood = history;
const routes = [
  {
    path: "/",
    name: "FoodDiary",
    component: FoodDiary,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  mood,
  history: createWebHashHistory(),
  routes,
});

export default router;
