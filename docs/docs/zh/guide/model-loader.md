---
lang: zh-CN
title: 模型加载器
---

::: tip 类型
组件
:::

## GLTF 加载器

### 默认用法

<GLTFLoader />

::: details 点击我查看代码

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

## 属性

| 名称    | 类型        | 默认值      | 描述                                   |
| ------- | ----------- | ----------- | -------------------------------------- |
| v-model | string      | string      | `必需` 模型的 URL。                    |
| scene   | THREE.Scene | THREE.Scene | `必需` 渲染模型的场景。                |
| cache   | boolean     | true        | `可选` 是否将模型缓存到 IndexedDB 中。 |

## 方法

| 名称   | 参数                        | 描述                           |
| ------ | --------------------------- | ------------------------------ |
| loaded | (model: THREE.Mesh) => void | 模型加载完成时调用的回调函数。 |
