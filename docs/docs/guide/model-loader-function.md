---
lang: en-US
title: Function Loader
---

::: tip type
Function
:::

## GLTF Loader

### Default Usage

<GLTFLoaderFunction />

::: details Click me to view the codes

```vue
<template>
  <tv-scene class="scene" @created="created"></tv-scene>
</template>

<script lang="ts" setup>
import { GLTFLoader } from 'three-vue3'

const created = async (scene, { camera }) => {
  camera.position.set(0, 1.5, 3)

  // Load model to scene.
  const model = await GLTFLoader('/models/girl.glb')
  scene.add(model)
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

<FBXLoaderFunction />

::: details Click me to view the codes

```vue
<template>
  <tv-scene class="scene" @created="created"></tv-scene>
</template>

<script lang="ts" setup>
import { FBXLoader } from 'three-vue3'

const created = async (scene, { camera }) => {
  camera.position.set(0, 1.5, 3)

  // Load model to scene.
  const model = await FBXLoader('/models/girl.fbx')
  scene.add(model)
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

<OBJLoaderFunction />

::: details Click me to view the codes

```vue
<template>
  <tv-scene class="scene" @created="created"></tv-scene>
</template>

<script lang="ts" setup>
import { OBJLoader } from 'three-vue3'

const created = async (scene, { camera }) => {
  camera.position.set(0, 1.5, 3)

  // Load model to scene.
  const model = await OBJLoader('/models/obj/girl.obj', '/models/obj/girl.mtl')
  scene.add(model)
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

## Parametersa

| Name       | Type     | Default | Description                                                                                                 |
| ---------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| url        | string   |         | `required` The model url.                                                                                   |
| mtlUrl     | string   |         | ?`required` The model material url. Only `OBJLoader` need this parameter.                                   |
| cache      | boolean  | true    | `optional` The model will be cached into the indexDB. Default is true.                                      |
| onProgress | function |         | `optional` The callback function when loading the model. (event: {type: string, progress: number}) => void. |
