import{_ as t,c as e,a as n,d as p,f as l,o as c,r as i}from"./app-KH696HqO.js";const o={};function u(r,s){const a=i("SkyBox");return c(),e("div",null,[s[0]||(s[0]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"类型"),n("p",null,"类")],-1)),s[1]||(s[1]=n("h2",{id:"默认用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认用法"},[n("span",null,"默认用法")])],-1)),p(a),s[2]||(s[2]=l(`<details class="hint-container details"><summary>点击我查看代码</summary><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tv-scene</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@created</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>created<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tv-scene</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> SkyBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three-vue3&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> skyBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SkyBox</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/right.jpg&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/left.jpg&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/top.jpg&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/bottom.jpg&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/front.jpg&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;/images/examples/skybox/back.jpg&#39;</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">created</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">scene</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  scene<span class="token punctuation">.</span>background <span class="token operator">=</span> skyBox<span class="token punctuation">.</span>scene</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.scene</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>scene</td><td>THREE.CubeTexture</td><td>用于 THREE.Scene 背景的立方体纹理。</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>constructor</td><td>(images: string[]) =&gt; void</td><td><code>images</code> 包含六张图片，分别是立方体的右、左、上、下、前、后视图。</td></tr></tbody></table>`,5))])}const d=t(o,[["render",u],["__file","sky-box.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/sky-box.html","title":"天空盒","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"天空盒"},"headers":[{"level":2,"title":"默认用法","slug":"默认用法","link":"#默认用法","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"updatedTime":1739338905000,"contributors":[{"name":"Shing","username":"Shing","email":"sunquakes@outlook.com","commits":1,"url":"https://github.com/Shing"},{"name":"Shing Rui","username":"Shing Rui","email":"sunquakes@outlook.com","commits":3,"url":"https://github.com/Shing Rui"}]},"filePathRelative":"zh/guide/sky-box.md"}');export{d as comp,m as data};
