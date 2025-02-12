import { App } from 'vue'
import Scene from './components/Scene'
import GLTFLoader from './components/GLTFLoader'

// components
export default {
  install: (app: App) => {
    app.component('tv-scene', Scene)
    app.component('tv-gltf-loader', GLTFLoader)
  }
}

export { SkyBox } from './utils/SkyBox'
export { Popup } from './utils/Popup'
