import { defineComponent, PropType, inject } from 'vue'
import * as THREE from 'three'
import { OBJLoader } from '../utils/ModelLoader'

export default defineComponent({
  setup(props, { emit }) {
    return {
      async init() {
        const sceneSlotProps: SceneSlotProps | undefined = inject('sceneSlotProps')
        const scene = sceneSlotProps?.scene
        const model = await OBJLoader(props.modelValue, props.mtl, props.cache, (event) =>
          emit('onProgress', event)
        )
        scene.add(model)
        emit('loaded', model)
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
    mtl: {
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
