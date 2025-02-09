---
lang: en-US
title: SkyBox
---

::: tip type
Class
:::

## Default Usage

<SkyBox />

::: details Click me to view the codes

```vue
<template>
  <scene class="scene" @created="created"></scene>
</template>

<script lang="ts" setup>
import { SkyBox } from 'three-vue3'

const skyBox = new SkyBox([
  '/images/examples/skybox/right.jpg',
  '/images/examples/skybox/left.jpg',
  '/images/examples/skybox/top.jpg',
  '/images/examples/skybox/bottom.jpg',
  '/images/examples/skybox/front.jpg',
  '/images/examples/skybox/back.jpg'
])

const created = (scene) => {
  scene.background = skyBox.scene
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

| Name  | Type              | Description                                           |
| ----- | ----------------- | ----------------------------------------------------- |
| scene | THREE.CubeTexture | The cube texture to use for THREE.Scene's background. |

## Methods

| Name        | Parameters                 | Description                                                                                       |
| ----------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| constructor | (images: string[]) => void | The `images` include six images, which are the right, left, top, bottom, front, back of the cube. |
