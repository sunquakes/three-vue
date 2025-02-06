export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Three Vue\",\"description\":\"A vue3.x component library of Three.js.\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"English\",\"title\":\"Three Vue\",\"description\":\"A vue3.x component library of Three.js.\"},\"/zh/\":{\"lang\":\"简体中文\",\"title\":\"Three Vue\",\"description\":\"一个Three.js的vue3.x组件库。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
