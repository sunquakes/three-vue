declare global {
  type Array3 = [number, number, number]

  type Array4 = [number, number, number, number]

  type Position = Array3

  type LoadEvent = {
    type: string
    progress: number
  }

  type WaveCircleMeshOptions = {
    radius?: number
    color?: Array4
    speed?: number
    verticalAxis?: AxisType
  }
}

export {}
