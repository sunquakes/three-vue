<template>
  <tv-scene class="scene" v-model="sceneValue" @created="created">
    <tv-fbx-loader v-model="fbxUrl" :scene="sceneValue"></tv-fbx-loader>
  </tv-scene>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fbxUrl = ref('/models/girl.fbx')
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
