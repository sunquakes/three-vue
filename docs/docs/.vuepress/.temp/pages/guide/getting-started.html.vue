<template><div><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span>Introduce</span></a></h2>
<p>This project leverages <code v-pre>Vue 3</code> and <code v-pre>Three.js</code> to create a robust toolkit for building interactive 3D applications. It provides components and utilities for initializing and managing 3D scenes, loading models with caching support, adding interactive popups, and setting up realistic backgrounds with skyboxes. The global registration of components and export of utility classes ensure seamless integration and ease of use across different parts of the application.</p>
<h2 id="install-three-js" tabindex="-1"><a class="header-anchor" href="#install-three-js"><span>Install <code v-pre>Three.js</code></span></a></h2>
<CodeTabs id="9" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> three</span>
<span class="line"></span></code></pre>
</div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> three</span>
<span class="line"></span></code></pre>
</div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> three</span>
<span class="line"></span></code></pre>
</div></template>
</CodeTabs>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2>
<ul>
<li>Install <code v-pre>three-vue</code> via pnpm or yarn or npm</li>
</ul>
<CodeTabs id="30" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]'>
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> three-vue</span>
<span class="line"></span></code></pre>
</div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> three-vue</span>
<span class="line"></span></code></pre>
</div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> three-vue</span>
<span class="line"></span></code></pre>
</div></template>
</CodeTabs>
<ul>
<li>Import the desired components from <code v-pre>three-vue</code>.</li>
</ul>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> ThreeVue <span class="token keyword">from</span> <span class="token string">'three-vue'</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ThreeVue<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>Dive into our in-depth documentation and practical examples to unlock the full potential of three-vue in your <code v-pre>Vue 3</code> projects.</li>
</ul>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2>
<h3 id="scene-management" tabindex="-1"><a class="header-anchor" href="#scene-management"><span>Scene Management</span></a></h3>
<ul>
<li>Automatic Initialization: Automatically initializes a 3D scene upon mounting, setting up essential elements like renderer, camera, lights, axes helper, and controls.</li>
<li>Event Emission: Emits events such as created when the scene is initialized, allowing parent components to interact with the scene.</li>
<li>Customizable Props: Supports optional props for renderer, camera, light, axes helper, and controls, enabling customization based on application needs.</li>
<li>Slot Support: Allows inserting additional content via slots, enhancing flexibility.</li>
</ul>
<h3 id="skybox" tabindex="-1"><a class="header-anchor" href="#skybox"><span>SkyBox</span></a></h3>
<ul>
<li>Background Setup: Sets up a skybox as the background of a 3D scene using six images (right, left, top, bottom, front, back).</li>
<li>Texture Loading: Loads cube textures using Three.js's CubeTextureLoader.</li>
<li>Seamless Integration: Easily integrates with the scene to provide realistic backgrounds.</li>
</ul>
<h3 id="model-loader" tabindex="-1"><a class="header-anchor" href="#model-loader"><span>Model Loader</span></a></h3>
<ul>
<li>Model Loading: Loads 3D models into a specified scene.</li>
<li>Caching Mechanism: Utilizes IndexedDB for caching models, reducing load times on subsequent requests.</li>
<li>Asynchronous Loading: Fetches models asynchronously using the fetch API and parses them into Three.js objects.</li>
<li>Callback Function: Provides a loaded event to notify when the model has been successfully loaded and added to the scene.</li>
</ul>
<h3 id="popup" tabindex="-1"><a class="header-anchor" href="#popup"><span>Popup</span></a></h3>
<ul>
<li>Custom Popups: Creates popups that can contain custom Vue components.</li>
<li>Positioning and Movement: Allows popups to be positioned in 3D space and moved smoothly over a specified duration.</li>
<li>CSS2D Integration: Uses Three.js's CSS2DRenderer to render HTML elements within the 3D scene.</li>
<li>Lifecycle Management: Manages popup lifecycle through methods like create, moveTo, and update.</li>
</ul>
</div></template>


