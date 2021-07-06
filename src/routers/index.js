const routes = [
  { path: '/', component: ()=> import("@/views/index/HomePage.vue") },
  { path: '/article', component: ()=> import("@/views/article/ArticleBrowse.vue") },
]
export default routes;