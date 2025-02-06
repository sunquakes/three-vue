import * as THREE from 'three'

export default function (): THREE.WebGLRenderer {
  const Renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  return Renderer
}
