[English](README.md) | 🇨🇳中文

# Cesium Components Vue

<p align="center">
  <a href="https://cesium.sunquakes.com/zh" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://cesium.sunquakes.com/images/logo.png" alt="three-vue logo">
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/node-%3E=20.5.1-brightgreen.svg?maxAge=2592000" alt="Node">
  <img alt="GitHub" src="https://img.shields.io/github/license/sunquakes/three-vue?color=blue">
  <img alt="three-vue" src="https://img.shields.io/github/v/release/sunquakes/three-vue">
</p>

## 文档

访问 [cesium.sunquakes.com](https://cesium.sunquakes.com)

## 安装

### 安装Cesium

#### 方法一、下载包

- 从github下载Cesium [https://github.com/CesiumGS/cesium/releases](https://github.com/CesiumGS/cesium/releases)。

- 解压后将Cesium目录拷贝到/public目录。

- 将Cesium的js和css文件引入到index.html。

```html
<script type="text/javascript" src="/Cesium/Cesium.js"></script>
<link rel="stylesheet" href="/Cesium/Widgets/widgets.css" />
```

#### 方法二、用CDN资源

- 将Cesium的js和css文件引入到index.html。

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Cesium.js" integrity="sha512-x4px4C+PHoAP0tAGI1XA1164gN+pT88gY5wpP4j4Nokmg75f5RJ9HOyzLNx6usrbtmzZFaGbPxdYgeEnptqbqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Widgets/widgets.min.css" integrity="sha512-B5b+YSvAqAIXLgYMg42Tc9KmdoYyGQt2G13igHZaDPitOzeO6hUsMkz8uhNg24eRbPcTivMcQ55/FhyxzcCFVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

### 安装 `three-vue`

```bash
pnpm install three-vue
```

## 开始

```ts
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
  })
})
</script>

<style>
.viewer {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
```

## 样例

<div>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/viewer.html#default-color">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/map-world.png" />
  </a>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/popup.html#example">
    <img width="49%" src="https://cesium.sunquakes.com/images//examples/popup.png" />
  </a>
</div>
<div>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/material.html#polyline">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/polyline-arrors.png" />
  </a>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/viewer.html#custom-color">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/map-world-custom-color.png" />
  </a>
</div>
<div>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/material.html#ellipsefadematerial">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/ellipse-fade.gif" />
  </a>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/viewer.html#default-color-1">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/amap.png" />
  </a>
</div>
<div>
  <a target="_blank" href="https://cesium.sunquakes.com/zh/guide/viewer.html#custom-color-1">
    <img width="49%" src="https://cesium.sunquakes.com/images/examples/amap-custom-color.png" />
  </a>
</div>

## 证书

[Apache-2.0 license](/LICENSE)
