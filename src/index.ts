import { App } from 'vue'
import Scene from './components/Scene'
import GLTFLoader from './components/GLTFLoader'
import FBXLoader from './components/FBXLoader'
import OBJLoader from './components/OBJLoader'
import SkyBox from './utils/SkyBox'
import Popup from './utils/Popup'
import ME from './utils/ME'

// component
export default {
  install: (app: App) => {
    app.component('tv-scene', Scene)
    app.component('tv-gltf-loader', GLTFLoader)
    app.component('tv-fbx-loader', FBXLoader)
    app.component('tv-obj-loader', OBJLoader)
  }
}

// class
export { SkyBox, Popup, ME }

// function
export * from './utils/ModelLoader'
