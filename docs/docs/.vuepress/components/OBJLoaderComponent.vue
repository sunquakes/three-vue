<template>
  <tv-scene class="scene" v-model="sceneValue" @created="created">
    <tv-obj-loader v-model="objUrl" :mtl="mtlUrl" :scene="sceneValue"></tv-obj-loader>
  </tv-scene>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const objUrl = ref('/models/obj/girl.obj')
const mtlUrl = ref('/models/obj/girl.mtl')
const sceneValue = ref(null)

const created = (scene, { camera }) => {
  camera.position.set(0, 1.5, 3)
}
</script>

<style>
.scene {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
