English | [🇨🇳中文](https://github.com/sunquakes/three-vue3/blob/main/README_ZH.md)

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

## Documentation

Visit [three-vue3.sunquakes.com](https://three-vue3.sunquakes.com).

## Install

### Install `Three.js`

```bash
pnpm install three
```

### Install `three-vue3`

```bash
pnpm install three-vue3
```

## Getting Started

- Import the desired components from `three-vue3` in `main.js`.

```js
import ThreeVue3 from 'three-vue3'
Vue.use(ThreeVue3)
```

- Use it in `Vue 3` components.

```vue
<template>
  <div class="scene">
    <scene></scene>
  </div>
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

## License

[Apache-2.0 license](/LICENSE)
