import { defineClientConfig } from '@vuepress/client'
import ThreeVue from 'three-vue'
import Scene from './components/Scene.vue'
import SkyBox from './components/SkyBox.vue'
import GLTFLoader from './components/GLTFLoader.vue'
import Popup from './components/Popup.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ThreeVue)
    app.component('Scene', Scene)
    app.component('SkyBox', SkyBox)
    app.component('GLTFLoader', GLTFLoader)
    app.component('Popup', Popup)
  }
})
