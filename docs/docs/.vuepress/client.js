import { defineClientConfig } from '@vuepress/client'
import ThreeVue3 from 'three-vue3'
import Scene from './components/Scene.vue'
import SceneBgImage from './components/SceneBgImage.vue'
import SceneClearColor from './components/SceneClearColor.vue'
import SkyBox from './components/SkyBox.vue'
import GLTFLoader from './components/GLTFLoader.vue'
import Popup from './components/Popup.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ThreeVue3)
    app.component('Scene', Scene)
    app.component('SceneBgImage', SceneBgImage)
    app.component('SceneClearColor', SceneClearColor)
    app.component('SkyBox', SkyBox)
    app.component('GLTFLoader', GLTFLoader)
    app.component('Popup', Popup)
  }
})
