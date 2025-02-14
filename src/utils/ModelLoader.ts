import * as THREE from 'three'
import { GLTFLoader as THREEGLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader as THREEFBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader as THREEOBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader as THREEMTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'

const OBJECT_STORE = 'THREE_VUE_OBJECT_STORE'
const DB_NAME = 'GLBDB'

export default function fileLoader(url: string, cache: boolean = true): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    if (!cache) {
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          resolve(data)
        })
      return
    }
    const key = btoa(url)
    const checkCacheAndLoadModel = () => {
      const request = indexedDB.open(DB_NAME, 2)

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result
        db.createObjectStore(OBJECT_STORE)
      }

      request.onsuccess = (event: any) => {
        const db = event.target.result
        const transaction = db.transaction([OBJECT_STORE], 'readonly')
        const objectStore = transaction.objectStore(OBJECT_STORE)
        const getRequest = objectStore.get(key)

        getRequest.onsuccess = (event: any) => {
          const data = event.target.result
          if (!data) {
            cacheModelToIndexedDB()
          } else {
            loadModelFromIndexedDB()
          }
        }

        getRequest.onerror = () => {
          reject('Error checking cache in IndexedDB')
        }
      }

      request.onerror = () => {
        reject('Error opening IndexedDB')
      }
    }

    const cacheModelToIndexedDB = async () => {
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          const request = indexedDB.open(DB_NAME, 2)

          request.onupgradeneeded = (event: any) => {
            const db = event.target.result
            db.createObjectStore(OBJECT_STORE)
          }

          request.onsuccess = (event: any) => {
            const db = event.target.result
            const transaction = db.transaction([OBJECT_STORE], 'readwrite')
            const objectStore = transaction.objectStore(OBJECT_STORE)
            const putRequest = objectStore.put(data, key)
            putRequest.onsuccess = () => {
              loadModelFromIndexedDB()
            }
          }

          request.onerror = () => {
            reject('Error opening IndexedDB')
          }
        })
        .catch((error) => {
          reject(error)
        })
    }

    const loadModelFromIndexedDB = () => {
      const request = indexedDB.open(DB_NAME, 2)

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result
        db.createObjectStore(OBJECT_STORE)
      }

      request.onsuccess = (event: any) => {
        const db = event.target.result
        const transaction = db.transaction([OBJECT_STORE], 'readonly')
        const objectStore = transaction.objectStore(OBJECT_STORE)
        const getRequest = objectStore.get(key)

        getRequest.onsuccess = (event: any) => {
          const data = event.target.result
          resolve(data)
        }

        getRequest.onerror = () => {
          reject('Error loading Model file from IndexedDB')
        }
      }

      request.onerror = () => {
        reject('Error opening IndexedDB')
      }
    }

    checkCacheAndLoadModel()
  })
}

export async function GLTFLoader(url: string, cache?: boolean): Promise<THREE.Group> {
  const data = await fileLoader(url, cache)
  const loader = new THREEGLTFLoader()
  return new Promise((resolve) => {
    loader.parse(data, '', (gltf) => {
      const model = gltf.scene
      resolve(model)
    })
  })
}

export async function FBXLoader(url: string, cache?: boolean): Promise<THREE.Group> {
  const data = await fileLoader(url, cache)
  const loader = new THREEFBXLoader()
  return new Promise((resolve) => {
    const model = loader.parse(data, '')
    resolve(model)
  })
}

export async function OBJLoader(
  url: string,
  mtlUrl: string,
  cache?: boolean
): Promise<THREE.Group> {
  const data = await fileLoader(url, cache)
  const mtlData = await fileLoader(mtlUrl, cache)
  const decoder = new TextDecoder('utf-8')
  const text = decoder.decode(data)
  const mtlText = decoder.decode(mtlData)
  const loader = new THREEOBJLoader()
  const mtlLoader = new THREEMTLLoader()
  const mtl = mtlLoader.parse(mtlText, '')
  loader.setMaterials(mtl)
  return new Promise((resolve) => {
    const model = loader.parse(text)
    resolve(model)
  })
}
