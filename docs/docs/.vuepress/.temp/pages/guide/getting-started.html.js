import comp from "E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/guide/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Getting Started\"},\"headers\":[{\"level\":2,\"title\":\"Introduce\",\"slug\":\"introduce\",\"link\":\"#introduce\",\"children\":[]},{\"level\":2,\"title\":\"Install Three.js\",\"slug\":\"install-three-js\",\"link\":\"#install-three-js\",\"children\":[]},{\"level\":2,\"title\":\"Getting Started\",\"slug\":\"getting-started\",\"link\":\"#getting-started\",\"children\":[]},{\"level\":2,\"title\":\"Features\",\"slug\":\"features\",\"link\":\"#features\",\"children\":[{\"level\":3,\"title\":\"Scene Management\",\"slug\":\"scene-management\",\"link\":\"#scene-management\",\"children\":[]},{\"level\":3,\"title\":\"SkyBox\",\"slug\":\"skybox\",\"link\":\"#skybox\",\"children\":[]},{\"level\":3,\"title\":\"Model Loader\",\"slug\":\"model-loader\",\"link\":\"#model-loader\",\"children\":[]},{\"level\":3,\"title\":\"Popup\",\"slug\":\"popup\",\"link\":\"#popup\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"guide/getting-started.md\"}")
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
