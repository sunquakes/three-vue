import { App } from 'vue'
import Scene from './components/Scene'
import GLTFLoader from './components/GLTFLoader'

// components
export default {
  install: (app: App) => {
    app.component('scene', Scene)
    app.component('gltf-loader', GLTFLoader)
  }
}

export { SkyBox } from './utils/SkyBox'
export { Popup } from './utils/Popup'
