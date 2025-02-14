import * as THREE from 'three'

export default function (): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  return renderer
}
