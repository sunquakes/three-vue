import { App } from 'vue'
import Scene from './components/Scene'
import GLTFLoader from './components/GLTFLoader'
import SkyBox from './utils/SkyBox'
import Popup from './utils/Popup'
import ME from './utils/ME'

// component
export default {
  install: (app: App) => {
    app.component('tv-scene', Scene)
    app.component('tv-gltf-loader', GLTFLoader)
  }
}

// class
export { SkyBox, Popup, ME }

// function
export * from './utils/ModelLoader'
