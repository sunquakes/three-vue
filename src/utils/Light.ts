import * as THREE from 'three'

export default function (): THREE.Light {
  const light = new THREE.HemisphereLight(0xffffff, 0x666666, 1)
  light.intensity = 10
  return light
}
