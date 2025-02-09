---
lang: en-US
title: Scene
---

::: tip type
Component
:::

## Default Usage

<Scene />

::: details Click me to view the codes

```vue
<template>
  <scene class="scene"></scene>
</template>

<script lang="ts" setup></script>

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

| Name               | Type                        | Default                 | Description                                                                                            |
| ------------------ | --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------ |
| v-model            | THREE.Scene                 | THREE.Scene             | `optional` The value will be the `THREE.Scene` instance from `undefined` after the components mounted. |
| v-model:renderer   | THREE.WebGLRenderer         | THREE.WebGLRenderer     | `optional`                                                                                             |
| v-model:camera     | THREE.Camera                | THREE.PerspectiveCamera | `optional` Defaults to a PerspectiveCamera.                                                            |
| v-model:light      | THREE.Light                 | THREE.HemisphereLight   | `optional` Defaults to a HemisphereLight.                                                              |
| v-model:axesHelper | THREE.AxesHelper \| boolean | THREE.AxesHelper        | `optional` Defaults to a AxesHelper, `false` to hide it.                                               |
| v-model:controls   | OrbitControls \| boolean    | OrbitControls           | `optional` Defaults to a OrbitControls, `false` to disable it.                                         |

## Methods

| Name    | Parameters                                              | Description                                                    |
| ------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| created | (scene, {camera, light, axesHelper, controls }) => void | Called when the component is mounted and the scene is created. |
