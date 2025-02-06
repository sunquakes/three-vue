import comp from "E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/model-loader.html.vue"
const data = JSON.parse("{\"path\":\"/guide/model-loader.html\",\"title\":\"Model Loader\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Model Loader\"},\"headers\":[{\"level\":2,\"title\":\"GLTF Loader\",\"slug\":\"gltf-loader\",\"link\":\"#gltf-loader\",\"children\":[{\"level\":3,\"title\":\"Default Usage\",\"slug\":\"default-usage\",\"link\":\"#default-usage\",\"children\":[]}]},{\"level\":2,\"title\":\"Props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]},{\"level\":2,\"title\":\"Methods\",\"slug\":\"methods\",\"link\":\"#methods\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/model-loader.md\"}")
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
