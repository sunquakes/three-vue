---
lang: en-US
title: Model Loader
---

::: tip type
Component
:::

## GLTF Loader

### Default Usage

<GLTFLoader />

::: details Click me to view the codes

```vue
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
```

:::

## Props

| Name    | Type        | Default     | Description                                            |
| ------- | ----------- | ----------- | ------------------------------------------------------ |
| v-model | string      | string      | `required` The model url.                              |
| scene   | THREE.Scene | THREE.Scene | `required` The Scene where the model will be rendered. |
| cache   | boolean     | true        | `optional` The model will be cached into the indexDB.  |

## Methods

| Name   | Parameters                  | Description                                                         |
| ------ | --------------------------- | ------------------------------------------------------------------- |
| loaded | (model: THREE.Mesh) => void | The callback function that will be called when the model is loaded. |
