<template><div><div class="hint-container tip">
<p class="hint-container-title">type</p>
<p>Component</p>
</div>
<h2 id="default-usage" tabindex="-1"><a class="header-anchor" href="#default-usage"><span>Default Usage</span></a></h2>
<Scene /><details class="hint-container details"><summary>Click me to view the codes</summary>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scene</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scene</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.scene</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>v-model</td>
<td>THREE.Scene</td>
<td>THREE.Scene</td>
<td><code v-pre>optional</code> The value will be the <code v-pre>THREE.Scene</code> instance from <code v-pre>undefined</code> after the components mounted.</td>
</tr>
<tr>
<td>v-model:renderer</td>
<td>THREE.WebGLRenderer</td>
<td>THREE.WebGLRenderer</td>
<td><code v-pre>optional</code></td>
</tr>
<tr>
<td>v-model:camera</td>
<td>THREE.Camera</td>
<td>THREE.PerspectiveCamera</td>
<td><code v-pre>optional</code> Defaults to a PerspectiveCamera.</td>
</tr>
<tr>
<td>v-model:light</td>
<td>THREE.Light</td>
<td>THREE.HemisphereLight</td>
<td><code v-pre>optional</code> Defaults to a HemisphereLight.</td>
</tr>
<tr>
<td>v-model:axesHelper</td>
<td>THREE.AxesHelper | boolean</td>
<td>THREE.AxesHelper</td>
<td><code v-pre>optional</code> Defaults to a AxesHelper, <code v-pre>false</code> to hide it.</td>
</tr>
<tr>
<td>v-model:controls</td>
<td>OrbitControls | boolean</td>
<td>OrbitControls</td>
<td><code v-pre>optional</code> Defaults to a OrbitControls, <code v-pre>false</code> to disable it.</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Parameters</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>created</td>
<td>(scene, {camera, light, axesHelper, controls }) =&gt; void</td>
<td>Called when the component is mounted and the scene is created.</td>
</tr>
</tbody>
</table>
</div></template>


