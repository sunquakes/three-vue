<template><div><div class="hint-container tip">
<p class="hint-container-title">类型</p>
<p>组件</p>
</div>
<h2 id="默认用法" tabindex="-1"><a class="header-anchor" href="#默认用法"><span>默认用法</span></a></h2>
<Scene /><details class="hint-container details"><summary>点击我查看代码</summary>
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
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>v-model</td>
<td>THREE.Scene</td>
<td>THREE.Scene</td>
<td><code v-pre>可选</code> 组件挂载后，值将是从 undefined 变为 THREE.Scene 实例。</td>
</tr>
<tr>
<td>v-model:renderer</td>
<td>THREE.WebGLRenderer</td>
<td>THREE.WebGLRenderer</td>
<td><code v-pre>可选</code></td>
</tr>
<tr>
<td>v-model:camera</td>
<td>THREE.Camera</td>
<td>THREE.PerspectiveCamera</td>
<td><code v-pre>可选</code> 默认为透视相机（PerspectiveCamera）。</td>
</tr>
<tr>
<td>v-model:light</td>
<td>THREE.Light</td>
<td>THREE.HemisphereLight</td>
<td><code v-pre>可选</code> 默认为半球光（HemisphereLight）。</td>
</tr>
<tr>
<td>v-model:axesHelper</td>
<td>THREE.AxesHelper | boolean</td>
<td>THREE.AxesHelper</td>
<td><code v-pre>可选</code> 默认为坐标轴辅助（AxesHelper），设置为 false 可隐藏它。</td>
</tr>
<tr>
<td>v-model:controls</td>
<td>OrbitControls | boolean</td>
<td>OrbitControls</td>
<td><code v-pre>可选</code> 默认为轨道控制器（OrbitControls），设置为 false 可禁用它。</td>
</tr>
</tbody>
</table>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>created</td>
<td>(scene, {camera, light, axesHelper, controls }) =&gt; void</td>
<td>组件挂载并创建场景时调用。</td>
</tr>
</tbody>
</table>
</div></template>


