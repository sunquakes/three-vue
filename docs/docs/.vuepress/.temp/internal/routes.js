export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/model-loader.html", { loader: () => import(/* webpackChunkName: "guide_model-loader.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/model-loader.html.js"), meta: {"title":"Model Loader"} }],
  ["/guide/popup.html", { loader: () => import(/* webpackChunkName: "guide_popup.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/popup.html.js"), meta: {"title":"Popup"} }],
  ["/guide/scene.html", { loader: () => import(/* webpackChunkName: "guide_scene.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/scene.html.js"), meta: {"title":"Scene"} }],
  ["/guide/sky-box.html", { loader: () => import(/* webpackChunkName: "guide_sky-box.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/sky-box.html.js"), meta: {"title":"SkyBox"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":""} }],
  ["/zh/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "zh_guide_getting-started.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/getting-started.html.js"), meta: {"title":"快速开始"} }],
  ["/zh/guide/model-loader.html", { loader: () => import(/* webpackChunkName: "zh_guide_model-loader.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/model-loader.html.js"), meta: {"title":"模型加载器"} }],
  ["/zh/guide/popup.html", { loader: () => import(/* webpackChunkName: "zh_guide_popup.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/popup.html.js"), meta: {"title":"弹出窗口"} }],
  ["/zh/guide/scene.html", { loader: () => import(/* webpackChunkName: "zh_guide_scene.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/scene.html.js"), meta: {"title":"场景"} }],
  ["/zh/guide/sky-box.html", { loader: () => import(/* webpackChunkName: "zh_guide_sky-box.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/sky-box.html.js"), meta: {"title":"天空盒"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
