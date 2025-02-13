import { defineComponent, PropType } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from '../utils/ModelLoader'

export default defineComponent({
  setup(props) {
    return {
      async init() {
        const model = await GLTFLoader(props.modelValue, props.cache)
        props.scene.add(model)
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
