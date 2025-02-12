<template>
  <tv-scene class="scene" @created="created"></tv-scene>
</template>

<script lang="ts" setup>
import { TextureLoader } from 'three'

const created = (scene) => {
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load('/images/examples/bg.jpg')
  scene.background = texture
}
</script>

<style>
.scene {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
