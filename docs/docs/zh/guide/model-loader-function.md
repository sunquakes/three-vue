---
lang: zh-CN
title: 函数加载器
---

::: tip type
函数
:::

## GLTF 加载器

### 默认用法

<GLTFLoaderFunction />

::: details 点击我查看代码

```vue
<template>
  <tv-scene class="scene" @created="created"></tv-scene>
</template>

<script lang="ts" setup>
import { GLTFLoader } from 'three-vue3'

const created = async (scene, { camera }) => {
  camera.position.set(0, 1.5, 3)

  // 加载模型到场景中。
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

| Name  | Type    | Default | Description                            |
| ----- | ------- | ------- | -------------------------------------- |
| url   | string  | string  | `必需` 模型的 URL。                    |
| cache | boolean | true    | `可选` 是否将模型缓存到 IndexedDB 中。 |
