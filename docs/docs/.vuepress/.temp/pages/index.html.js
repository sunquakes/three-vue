import comp from "E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"English\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"actions\":[{\"text\":\"Quick Start →\",\"link\":\"/guide/getting-started.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Automatic Initialization\",\"details\":\"Automatically initializes a 3D scene when the component is mounted, setting up the renderer, camera, lights, axes helper, and controls.\"},{\"title\":\"Model Loading and Caching\",\"details\":\"Supports caching models using IndexedDB to reduce repeated load times. The first load stores model data in a local database, and subsequent loads prioritize reading from the cache.\"},{\"title\":\"Enhanced Interactivity\",\"details\":\"Creates popups that can contain custom Vue components, supporting positioning and smooth movement in 3D space.\"}],\"footer\":\"Apache-2.0 license | Copyright © 2025-present Shing Rui\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
