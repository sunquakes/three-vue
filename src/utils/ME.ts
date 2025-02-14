import * as THREE from 'three'

export default class ME {
  /**
   * The element to be moved.
   */
  public scene: THREE.Group

  /**
   * The start timestamp of the element movement.
   */
  private start: number | undefined

  /**
   * The duration of the element move from the current position to the target position, the unit is millisecond.
   */
  private duration: number

  /**
   * The delta in the x-axis direction.
   */
  private deltaX: number

  /**
   * The delta in the y-axis direction.
   */
  private deltaY: number

  /**
   * The delta in the z-axis direction.
   */
  private deltaZ: number

  /**
   * The state of element movement.
   */
  private state: Boolean

  /**
   * Position of element window display
   */
  private position: Position

  constructor(scene: THREE.Group, position: Position) {
    this.scene = scene
    this.duration = 0
    this.deltaX = 0.0
    this.deltaY = 0.0
    this.deltaZ = 0.0
    this.state = false
    this.position = position
    this.scene.position.set(...position)
    this.update = this.update.bind(this)
  }

  /**
   * Move the element to the specified position.
   * @param position
   * @param duration
   */
  moveTo(position: Position, duration: number) {
    this.duration += duration
    this.deltaX += position[0] - this.position[0]
    this.deltaY += position[1] - this.position[1]
    this.deltaZ += position[2] - this.position[2]
    this.position = position
    if (this.state === false) {
      this.state = true
      requestAnimationFrame(this.update)
    }
  }

  /**
   * Update the position of the element.
   * @param timestamp
   */
  update(timestamp: number) {
    if (this.start === undefined) {
      this.start = timestamp
    }
    const deltaTime = timestamp - this.start

    this.start = timestamp

    const timeRatio = Math.min(deltaTime / this.duration, 1) // 时间比率，确保在 [0, 1] 范围内
    const deltaX = this.lerp(0, this.deltaX, timeRatio)
    const deltaY = this.lerp(0, this.deltaY, timeRatio)
    const deltaZ = this.lerp(0, this.deltaZ, timeRatio)
    this.duration -= deltaTime
    this.deltaX -= deltaX
    this.deltaY -= deltaY
    this.deltaZ -= deltaZ

    this.scene.position.x += deltaX
    this.scene.position.y += deltaY
    this.scene.position.z += deltaZ

    const rotate = this.calculateRotate(deltaX, deltaZ)
    if (rotate != null) {
      this.scene.rotation.y = rotate
    }

    if (this.duration > 0) {
      requestAnimationFrame(this.update)
    } else {
      this.state = false
    }
  }

  /**
   * Get the delta value between start and end.
   * @param start
   * @param end
   * @param time
   * @returns
   */
  lerp(start: number, end: number, time: number) {
    return start + (end - start) * time
  }

  /**
   * Calculate the rotation angle of the element.
   * @param a
   * @param b
   * @returns
   */
  calculateRotate(a: number, b: number) {
    if (a == 0 && b == 0) {
      return null
    }
    if (b == 0) {
      if (a > 0) {
        return Math.PI / 2
      } else {
        return -Math.PI / 2
      }
    }
    if (b < 0 && a >= 0) {
      return Math.atan(a / b) + Math.PI
    } else if (a <= 0 && b > 0) {
      return Math.atan(a / b)
    } else if (a <= 0 && b < 0) {
      return Math.atan(a / b) + Math.PI
    } else {
      return Math.atan(a / b)
    }
  }
}
