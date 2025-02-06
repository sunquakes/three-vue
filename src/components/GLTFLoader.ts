import { defineComponent, PropType } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const OBJECT_STORE = 'THREE_VUE_OBJECT_STORE'
const DB_NAME = 'GLBDB'

export default defineComponent({
  setup(props, { emit }) {
    const loadModel = (data: ArrayBuffer) => {
      const scene = props.scene
      const loader = new GLTFLoader()
      loader.parse(data, '', (gltf) => {
        const model = gltf.scene
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            emit('loaded', child)
          }
        })
        scene.add(model)
      })
    }
    return {
      init() {
        if (!props.cache) {
          console.log('props.cache', props.cache)
          fetch(props.modelValue)
            .then((response) => response.arrayBuffer())
            .then((data) => {
              loadModel(data)
            })
          return
        }
        const key = btoa(props.modelValue)
        const checkCacheAndLoadGLB = () => {
          const request = indexedDB.open(DB_NAME, 2)

          request.onupgradeneeded = (event: any) => {
            const db = event.target.result
            // 创建 OBJECT_STORE 对象存储空间
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
                cacheGLBToIndexedDB()
              }
              loadGLBFromIndexedDB()
            }

            getRequest.onerror = () => {
              console.error('Error checking cache in IndexedDB')
            }
          }

          request.onerror = () => {
            console.error('Error opening IndexedDB')
          }
        }

        const cacheGLBToIndexedDB = () => {
          fetch(props.modelValue)
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
                objectStore.put(data, key)
                loadGLBFromIndexedDB()
              }

              request.onerror = () => {
                console.error('Error opening IndexedDB')
              }
            })
            .catch((error) => {
              console.error(error)
            })
        }

        const loadGLBFromIndexedDB = () => {
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
              loadModel(data)
            }

            getRequest.onerror = () => {
              console.error('Error loading GLB file from IndexedDB')
            }
          }

          request.onerror = () => {
            console.error('Error opening IndexedDB')
          }
        }

        checkCacheAndLoadGLB()
      }
    }
  },
  render() {
    return null
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
    scene: {
      type: Object as PropType<THREE.Scene>,
      required: true
    },
    cache: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init()
  }
})
