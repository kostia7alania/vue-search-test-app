const routes = [
    {
      path: "/",
      name: "home",
      component: load("Home"),
      inMenu: true
    },
    {
      path: "/search",
      name: "search",
      component: load("Search"),
      inMenu: true
    },
    {
      path: "/404",
      name: "404",
      component: load("PageNotFound")
    },
    {
      path: "*",
      redirect: { name: "404" }
    }
  ];
  export default routes;
  
  function load(component) {
    return () => 
      import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
  }
  