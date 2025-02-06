import comp from "E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/guide/popup.html.vue"
const data = JSON.parse("{\"path\":\"/zh/guide/popup.html\",\"title\":\"弹出窗口\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"弹出窗口\"},\"headers\":[{\"level\":2,\"title\":\"默认用法\",\"slug\":\"默认用法\",\"link\":\"#默认用法\",\"children\":[]},{\"level\":2,\"title\":\"Props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]},{\"level\":2,\"title\":\"Methods\",\"slug\":\"methods\",\"link\":\"#methods\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zh/guide/popup.md\"}")
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
