import comp from "E:/new/vue-threejs/docs/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"简体中文\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"actions\":[{\"text\":\"快速开始 →\",\"link\":\"/zh/guide/getting-started.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"自动初始化\",\"details\":\"组件挂载时自动初始化 3D 场景，设置渲染器、相机、光源、辅助坐标轴和控制器。\"},{\"title\":\"模型加载与缓存\",\"details\":\"支持使用 IndexedDB 缓存模型以减少重复加载时间。首次加载会将模型数据存储在本地数据库中，后续加载优先从缓存读取。\"},{\"title\":\"增强的交互性\",\"details\":\"创建包含自定义 Vue 组件的弹出窗口，支持在 3D 空间中的定位和平滑移动。\"}],\"footer\":\"Apache-2.0 license | Copyright © 2025-present Shing Rui\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"zh/README.md\"}")
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
