import Vue from "vue";
import Router from "vue-router";
import Auth from "@okta/okta-vue";
import Home from "./views/Home.vue";

Vue.use(Auth, {
  issuer: "https://dev-492717.okta.com/oauth2/default",
  client_id: "0oa1d67frxty99puM357",
  redirect_uri: "https://dog-island.social/implicit/callback",
  scope: "openid profile email",
  pkce: true
});

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/popular",
      name: "popular",
      meta: {
        requiresAuth: true
      },
      component: () => import("./views/Popular.vue")
    },
    {
      path: "/implicit/callback",
      component: Auth.handleCallback()
    }
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());
export default router;
