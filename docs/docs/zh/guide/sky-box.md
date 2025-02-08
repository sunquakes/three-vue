---
lang: zh-CN
title: 天空盒
---

::: tip 类型
类
:::

## 默认用法

<SkyBox />

::: details 点击我查看代码

```vue
<template>
  <div class="scene">
    <scene @created="created"></scene>
  </div>
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

## 属性

| 名称  | 类型              | 描述                                |
| ----- | ----------------- | ----------------------------------- |
| scene | THREE.CubeTexture | 用于 THREE.Scene 背景的立方体纹理。 |

## 方法

| 名称        | 参数                       | 描述                                                              |
| ----------- | -------------------------- | ----------------------------------------------------------------- |
| constructor | (images: string[]) => void | `images` 包含六张图片，分别是立方体的右、左、上、下、前、后视图。 |
