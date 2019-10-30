// =========================================================
// * Vue Material Dashboard PRO - v1.3.1
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";

// Plugins
import App from "./App.vue";
import Chartist from "chartist";
import i18n from "@/plugins/i18n";
import { store } from "./store";
// router setup
import routes from "./routes/routes";

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  linkExactActiveClass: "nav-item active"
});

// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  store,
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
