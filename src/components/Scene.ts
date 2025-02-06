import { defineComponent, h, PropType, ref, watch } from 'vue'
import { generateUUID } from '../utils/UUID'
import Scene from '../utils/Scene'
import Camera from '../utils/Camera'
import Light from '../utils/Light'
import Renderer from '../utils/Renderer'
import AxesHelper from '../utils/AxesHelper'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default defineComponent({
  emits: [
    'update:modelValue',
    'update:renderer',
    'update:camera',
    'update:light',
    'update:axesHelper',
    'update:controls',
    'created'
  ],
  setup(props, { emit }) {
    const UUID = ref(generateUUID())
    const showSlot = ref(false)
    return {
      UUID,
      showSlot,
      init() {
        const container = document.getElementById(UUID.value)
        if (!container) {
          console.error(`Container with id "${UUID.value}" not found`)
          return
        }
        let renderer = props.renderer
        if (renderer == undefined) {
          renderer = Renderer()
          emit('update:renderer', renderer)
        }
        let camera = props.camera
        if (camera == undefined) {
          camera = Camera(container)
          emit('update:camera', camera)
        }
        let light = props.light
        if (light == undefined) {
          light = Light()
          emit('update:light', light)
        }
        let axesHelper = props.axesHelper
        if (axesHelper === undefined) {
          axesHelper = AxesHelper()
          emit('update:axesHelper', axesHelper)
        }
        let controls = props.controls
        if (controls === undefined) {
          controls = new OrbitControls(camera, container)
          emit('update:controls', controls)
        }
        const scene = Scene(renderer, container, { camera, light, axesHelper, controls })
        showSlot.value = true
        emit('update:modelValue', scene)
        emit('created', scene, { camera, light, axesHelper, controls })
      }
    }
  },
  render() {
    return h(
      'div',
      {
        id: this.UUID,
        style: { width: '100%', height: '100%', position: 'relative' }
      },
      this.showSlot && this.$slots.default ? this.$slots.default() : undefined
    )
  },
  props: {
    modelValue: {
      type: Object as PropType<THREE.Scene>
    },
    renderer: {
      type: Object as PropType<THREE.WebGLRenderer>
    },
    camera: {
      type: Object as PropType<THREE.Camera>
    },
    light: {
      type: Object as PropType<THREE.Light>
    },
    axesHelper: {
      type: Object as PropType<THREE.AxesHelper>
    },
    controls: {
      type: Object as PropType<OrbitControls>
    }
  },
  mounted() {
    this.init()
  }
})
