import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import LabelRenderer from './LabelRenderer'

interface Components {
  camera: THREE.Camera
  light: THREE.Light
  axesHelper: THREE.AxesHelper | undefined | boolean
  controls: OrbitControls | undefined | boolean
}

export default function (
  renderer: THREE.WebGLRenderer,
  container: HTMLElement,
  components: Components,
  callbackFrame?: Function
): THREE.Scene {
  const scene = new THREE.Scene()
  scene.add(components.light)

  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight

  renderer.setSize(containerWidth, containerHeight)
  container.appendChild(renderer.domElement)

  const labelRenderer = LabelRenderer(container)
  container.appendChild(labelRenderer.domElement)

  function animate() {
    requestAnimationFrame(animate)
    if (components.controls instanceof OrbitControls) {
      components.controls.update()
    }
    renderer.render(scene, components.camera)
    labelRenderer.render(scene, components.camera)
    callbackFrame?.()
  }
  animate()

  if (components.axesHelper instanceof THREE.AxesHelper) {
    scene.add(components.axesHelper)
  }

  function onWindowResize() {
    renderer.setSize(containerWidth, containerHeight)
    labelRenderer.setSize(containerWidth, containerHeight)
  }

  window.addEventListener('resize', onWindowResize)
  return scene
}
