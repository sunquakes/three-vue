[English](https://github.com/sunquakes/three-vue3/blob/main/README.md) | 🇨🇳中文

# Three Vue3

<p align="center">
  <a href="https://three-vue3.sunquakes.com/" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://three-vue3.sunquakes.com/images/logo.png" alt="three-vue3 logo">
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/node-%3E=22.13.0-brightgreen.svg?maxAge=2592000" alt="Node">
  <img alt="GitHub" src="https://img.shields.io/github/license/sunquakes/three-vue3?color=blue">
  <img alt="three-vue3" src="https://img.shields.io/github/v/release/sunquakes/three-vue3">
</p>

## 文档 

访问 [three-vue3.sunquakes.com](https://three-vue3.sunquakes.com).

## 安装

### 安装 `Three.js`

```bash
pnpm i three
```

### 安装 `three-vue3`

```bash
pnpm i three-vue3
```

## 快速开始

- 在 `main.js` 中导入 `three-vue3`.

```js
import ThreeVue3 from 'three-vue3'
Vue.use(ThreeVue3)
```

- 在`Vue 3`组件中使用.

```vue
<template>
  <tv-scene class="scene"></tv-scene>
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

## 证书

[Apache-2.0 license](/LICENSE)
