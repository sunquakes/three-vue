export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"repo\":\"sunquakes/three-vue\",\"editLinks\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Languages\",\"editLinkText\":\"Edit this page on GitHub\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/getting-started\"}],\"sidebar\":{\"/guide/\":[{\"children\":[\"/guide/getting-started.md\",\"/guide/scene.md\",\"/guide/sky-box.md\",\"/guide/model-loader.md\",\"/guide/popup.md\"]}]}},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/zh/guide/getting-started\"}],\"sidebar\":{\"/zh/guide/\":[{\"children\":[\"/zh/guide/getting-started.md\",\"/zh/guide/scene.md\",\"/zh/guide/sky-box.md\",\"/zh/guide/model-loader.md\",\"/zh/guide/popup.md\"]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
