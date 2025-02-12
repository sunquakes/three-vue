---
lang: zh-CN
title: 快速开始
---

## 介绍

本项目利用 `Vue 3` 和 `Three.js` 创建了一个强大的工具包，用于构建交互式的 3D 应用程序。它提供了初始化和管理 3D 场景的组件和工具，支持带有缓存功能的模型加载、添加交互式弹出窗口以及使用天空盒设置逼真的背景。通过全局注册组件和导出实用类，确保了在应用程序的不同部分中无缝集成和易于使用。

## 安装 `Three.js`

::: code-tabs

@tab pnpm

```bash:no-line-numbers
pnpm i three
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

## 快速开始

- 使用 `pnpm` 或 `yarn` 或 `npm` 安装 `three-vue3`

::: code-tabs

@tab pnpm

```bash:no-line-numbers
pnpm i three-vue3
```

@tab yarn

```bash:no-line-numbers
yarn add three-vue3
```

@tab npm

```bash:no-line-numbers
npm install three-vue3
```

:::

- 在 `main.js` 里导入 `three-vue3` 组件。

```js:no-line-numbers
import ThreeVue3 from 'three-vue3'
Vue.use(ThreeVue3)
```

- 深入阅读我们的详细文档和实际示例，以充分发挥 `three-vue3` 在您的 `Vue 3` 项目中的潜力。

## 特性

### 场景管理

- 自动初始化：组件挂载时自动初始化 3D 场景，设置渲染器、相机、光源、辅助坐标轴和控制器。
- 事件触发：当场景初始化时触发事件（如 created），允许父组件与场景进行交互。
- 可选属性：支持对渲染器、相机、光源、辅助坐标轴和控制器进行自定义配置，满足不同应用需求。
- 插槽支持：允许通过插槽插入其他内容，增强灵活性。

### 天空盒

- 背景设置：使用六张图片（右、左、上、下、前、后）作为 3D 场景的背景，设置天空盒。
- 纹理加载：使用 Three.js 的 CubeTextureLoader 加载立方体纹理。
- 无缝集成：轻松集成到场景中，提供逼真的背景效果。

### 模型加载器

- 模型加载：将 3D 模型加载到指定的场景中。
- 缓存机制：使用 IndexedDB 缓存模型，减少后续请求的加载时间。
- 异步加载：通过 fetch API 异步加载模型，并将其解析为 Three.js 对象。
- 回调函数：提供 loaded 事件，在模型成功加载并添加到场景时通知。

### 弹出窗口

- 自定义弹窗：创建包含自定义 Vue 组件的弹出窗口。
- 定位和移动：允许弹出窗口在 3D 空间中定位，并在指定时间内平滑移动。
- CSS2D 集成：使用 Three.js 的 CSS2DRenderer 在 3D 场景中渲染 HTML 元素。
- 生命周期管理：通过 create、moveTo 和 update 方法管理弹出窗口的生命周期。
