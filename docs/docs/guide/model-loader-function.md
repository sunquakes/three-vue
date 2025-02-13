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
  const model = await GLTFLoader('/models/girl.glb', true)
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

| Name  | Type    | Default | Description                                           |
| ----- | ------- | ------- | ----------------------------------------------------- |
| url   | string  | string  | `required` The model url.                             |
| cache | boolean | true    | `optional` The model will be cached into the indexDB. |
