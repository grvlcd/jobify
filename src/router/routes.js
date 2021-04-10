const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Home"
      },
      {
        path: "/works",
        component: () => import("pages/PageWorks.vue"),
        name: "Works"
      },
      {
        path: "/portfolio",
        component: () => import("pages/PagePortfolio.vue"),
        name: "Portfolio"
      },
      {
        path: "/settings",
        component: () => import("pages/PageSettings.vue"),
        name: "Settings"
      },
      {
        path: "/profile/:id",
        component: () => import("pages/profile/Index.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
