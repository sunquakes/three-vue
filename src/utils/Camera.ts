import * as THREE from 'three'

export default function (container: HTMLElement): THREE.Camera {
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000)
  camera.position.set(0, 0, 1)
  camera.lookAt(0, 0, 0)
  return camera
}
