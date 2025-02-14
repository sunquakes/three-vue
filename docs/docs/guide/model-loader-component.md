---
lang: en-US
title: Component Loader
---

::: tip type
Component
:::

## GLTF Loader

### Default Usage

<GLTFLoaderComponent />

::: details Click me to view the codes

```vue
<template>
  <tv-scene class="scene" v-model="sceneValue" @created="created">
    <tv-gltf-loader v-model="gltfUrl" :scene="sceneValue"></tv-gltf-loader>
  </tv-scene>
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

## FBX Loader

### Default Usage

<FBXLoaderComponent />

::: details Click me to view the codes

```vue
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
```

:::

## OBJ Loader

### Default Usage

<OBJLoaderComponent />

::: details Click me to view the codes

```vue
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
```

:::

## Props

| Name    | Type        | Default     | Description                                            |
| ------- | ----------- | ----------- | ------------------------------------------------------ |
| v-model | string      | string      | `required` The model url.                              |
| scene   | THREE.Scene | THREE.Scene | `required` The Scene where the model will be rendered. |
| cache   | boolean     | true        | `optional` The model will be cached into the indexDB.  |
| mtl     | string      |             | `optional` When using OBJLoader, the mtl file url.     |

## Methods

| Name   | Parameters                  | Description                                                         |
| ------ | --------------------------- | ------------------------------------------------------------------- |
| loaded | (model: THREE.Mesh) => void | The callback function that will be called when the model is loaded. |
