<template>
  <scene class="scene" v-model="sceneValue" @created="created">
    <gltf-loader v-model="gltfUrl" :scene="sceneValue"></gltf-loader>
  </scene>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gltfUrl = ref('/models/girl.glb')
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
