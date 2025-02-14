declare global {
  type Position = [number, number, number]
  type LoadEvent = {
    type: string
    progress: number
  }
}

export {}
