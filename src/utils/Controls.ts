import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function (camera: THREE.Camera, renderer: THREE.WebGLRenderer): OrbitControls {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target = new THREE.Vector3(0, 0, 0)
  return controls
}
