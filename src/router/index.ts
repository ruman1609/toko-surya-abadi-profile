import { createRouter, createWebHistory } from "vue-router";
import StoreProfilePage from "@/views/StoreProfilePage.vue";
import CheckStockPage from "@/views/CheckStockPage.vue";

const routes = [
  {
    path: "/",
    name: "StoreProfile",
    component: StoreProfilePage,
  },
  {
    path: "/check-stock",
    name: "CheckStock",
    component: CheckStockPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
