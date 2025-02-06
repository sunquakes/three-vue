<template><div><div class="hint-container tip">
<p class="hint-container-title">类型</p>
<p>类</p>
</div>
<h2 id="默认用法" tabindex="-1"><a class="header-anchor" href="#默认用法"><span>默认用法</span></a></h2>
<SkyBox /><details class="hint-container details"><summary>点击我查看代码</summary>
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
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>scene</td>
<td>THREE.CubeTexture</td>
<td>用于 THREE.Scene 背景的立方体纹理。</td>
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
<td>constructor</td>
<td>(images: string[]) =&gt; void</td>
<td><code v-pre>images</code> 包含六张图片，分别是立方体的右、左、上、下、前、后视图。</td>
</tr>
</tbody>
</table>
</div></template>


