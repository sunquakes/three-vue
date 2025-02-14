import * as THREE from 'three'

export default class SkyBox {
  /**
   * The cube texture.
   */
  public scene: THREE.CubeTexture

  /**
   * The cube texture, include six images.
   */
  private images: string[]

  /**
   * constructor
   * @param images The cube texture, include six images.
   */
  constructor(images: string[]) {
    this.images = images
    this.scene = this.load(images)
  }

  /**
   * Load the images.
   * @param images The cube texture, include six images.
   * @returns
   */
  private load(images: string[]): THREE.CubeTexture {
    const loader = new THREE.CubeTextureLoader()
    return loader.load(images)
  }
}
