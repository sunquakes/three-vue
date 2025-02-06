---
lang: en-US
title: Getting Started
---

## Introduce

This project leverages `Vue 3` and `Three.js` to create a robust toolkit for building interactive 3D applications. It provides components and utilities for initializing and managing 3D scenes, loading models with caching support, adding interactive popups, and setting up realistic backgrounds with skyboxes. The global registration of components and export of utility classes ensure seamless integration and ease of use across different parts of the application.

## Install `Three.js`

::: code-tabs

@tab pnpm

```bash:no-line-numbers
pnpm install three
```

@tab yarn

```bash:no-line-numbers
yarn add three
```

@tab npm

```bash:no-line-numbers
npm install three
```

:::

## Getting Started

- Install `three-vue` via pnpm or yarn or npm

::: code-tabs

@tab pnpm

```bash:no-line-numbers
pnpm install three-vue
```

@tab yarn

```bash:no-line-numbers
yarn add three-vue
```

@tab npm

```bash:no-line-numbers
npm install three-vue
```

:::

- Import the desired components from `three-vue`.

```js:no-line-numbers
import ThreeVue from 'three-vue'
Vue.use(ThreeVue)
```

- Dive into our in-depth documentation and practical examples to unlock the full potential of three-vue in your `Vue 3` projects.

## Features

### Scene Management

- Automatic Initialization: Automatically initializes a 3D scene upon mounting, setting up essential elements like renderer, camera, lights, axes helper, and controls.
- Event Emission: Emits events such as created when the scene is initialized, allowing parent components to interact with the scene.
- Customizable Props: Supports optional props for renderer, camera, light, axes helper, and controls, enabling customization based on application needs.
- Slot Support: Allows inserting additional content via slots, enhancing flexibility.

### SkyBox

- Background Setup: Sets up a skybox as the background of a 3D scene using six images (right, left, top, bottom, front, back).
- Texture Loading: Loads cube textures using Three.js's CubeTextureLoader.
- Seamless Integration: Easily integrates with the scene to provide realistic backgrounds.

### Model Loader

- Model Loading: Loads 3D models into a specified scene.
- Caching Mechanism: Utilizes IndexedDB for caching models, reducing load times on subsequent requests.
- Asynchronous Loading: Fetches models asynchronously using the fetch API and parses them into Three.js objects.
- Callback Function: Provides a loaded event to notify when the model has been successfully loaded and added to the scene.

### Popup

- Custom Popups: Creates popups that can contain custom Vue components.
- Positioning and Movement: Allows popups to be positioned in 3D space and moved smoothly over a specified duration.
- CSS2D Integration: Uses Three.js's CSS2DRenderer to render HTML elements within the 3D scene.
- Lifecycle Management: Manages popup lifecycle through methods like create, moveTo, and update.
