<template><div><div class="hint-container tip">
<p class="hint-container-title">type</p>
<p>Class</p>
</div>
<h2 id="default-usage" tabindex="-1"><a class="header-anchor" href="#default-usage"><span>Default Usage</span></a></h2>
<SkyBox /><details class="hint-container details"><summary>Click me to view the codes</summary>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scene<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scene</span> <span class="token attr-name">@created</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>created<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scene</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> SkyBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'three-vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> skyBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SkyBox</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/right.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/left.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/top.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/bottom.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/front.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'/images/examples/skybox/back.jpg'</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">created</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">scene</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  scene<span class="token punctuation">.</span>background <span class="token operator">=</span> skyBox<span class="token punctuation">.</span>scene</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.scene</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>scene</td>
<td>THREE.CubeTexture</td>
<td>The cube texture to use for THREE.Scene's background.</td>
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
<td>constructor</td>
<td>(images: string[]) =&gt; void</td>
<td>The <code v-pre>images</code> include six images, which are the right, left, top, bottom, front, back of the cube.</td>
</tr>
</tbody>
</table>
</div></template>


