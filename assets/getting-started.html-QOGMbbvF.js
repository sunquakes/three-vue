import{_ as r,c as d,a as e,b as t,d as o,e as s,f as u,r as p,o as c}from"./app-KH696HqO.js";const h={};function g(m,n){const l=p("CodeTabs");return c(),d("div",null,[n[12]||(n[12]=e("h2",{id:"introduce",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduce"},[e("span",null,"Introduce")])],-1)),n[13]||(n[13]=e("p",null,[t("This project leverages "),e("code",null,"Vue 3"),t(" and "),e("code",null,"Three.js"),t(" to create a robust toolkit for building interactive 3D applications. It provides components and utilities for initializing and managing 3D scenes, loading models with caching support, adding interactive popups, and setting up realistic backgrounds with skyboxes. The global registration of components and export of utility classes ensure seamless integration and ease of use across different parts of the application.")],-1)),n[14]||(n[14]=e("h2",{id:"install-three-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-three-js"},[e("span",null,[t("Install "),e("code",null,"Three.js")])])],-1)),o(l,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}]},{title0:s(({value:a,isActive:i})=>n[0]||(n[0]=[t("pnpm")])),title1:s(({value:a,isActive:i})=>n[1]||(n[1]=[t("yarn")])),title2:s(({value:a,isActive:i})=>n[2]||(n[2]=[t("npm")])),tab0:s(({value:a,isActive:i})=>n[3]||(n[3]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"pnpm"),t(" i three")]),t(`
`),e("span",{class:"line"})])])],-1)])),tab1:s(({value:a,isActive:i})=>n[4]||(n[4]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(" three")]),t(`
`),e("span",{class:"line"})])])],-1)])),tab2:s(({value:a,isActive:i})=>n[5]||(n[5]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"npm"),t(),e("span",{class:"token function"},"install"),t(" three")]),t(`
`),e("span",{class:"line"})])])],-1)])),_:1}),n[15]||(n[15]=e("h2",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started"},[e("span",null,"Getting Started")])],-1)),n[16]||(n[16]=e("ul",null,[e("li",null,[t("Install "),e("code",null,"three-vue3"),t(" via "),e("code",null,"pnpm"),t(" or "),e("code",null,"yarn"),t(" or "),e("code",null,"npm")])],-1)),o(l,{id:"30",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}]},{title0:s(({value:a,isActive:i})=>n[6]||(n[6]=[t("pnpm")])),title1:s(({value:a,isActive:i})=>n[7]||(n[7]=[t("yarn")])),title2:s(({value:a,isActive:i})=>n[8]||(n[8]=[t("npm")])),tab0:s(({value:a,isActive:i})=>n[9]||(n[9]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"pnpm"),t(" i three-vue3")]),t(`
`),e("span",{class:"line"})])])],-1)])),tab1:s(({value:a,isActive:i})=>n[10]||(n[10]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(" three-vue3")]),t(`
`),e("span",{class:"line"})])])],-1)])),tab2:s(({value:a,isActive:i})=>n[11]||(n[11]=[e("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"npm"),t(),e("span",{class:"token function"},"install"),t(" three-vue3")]),t(`
`),e("span",{class:"line"})])])],-1)])),_:1}),n[17]||(n[17]=u(`<ul><li>Import the desired components from <code>three-vue3</code> in <code>main.js</code>.</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> ThreeVue3 <span class="token keyword">from</span> <span class="token string">&#39;three-vue3&#39;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ThreeVue3<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><ul><li>Dive into our in-depth documentation and practical examples to unlock the full potential of <code>three-vue3</code> in your <code>Vue 3</code> projects.</li></ul><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><h3 id="scene-management" tabindex="-1"><a class="header-anchor" href="#scene-management"><span>Scene Management</span></a></h3><ul><li>Automatic Initialization: Automatically initializes a 3D scene upon mounting, setting up essential elements like renderer, camera, lights, axes helper, and controls.</li><li>Event Emission: Emits events such as created when the scene is initialized, allowing parent components to interact with the scene.</li><li>Customizable Props: Supports optional props for renderer, camera, light, axes helper, and controls, enabling customization based on application needs.</li><li>Slot Support: Allows inserting additional content via slots, enhancing flexibility.</li></ul><h3 id="skybox" tabindex="-1"><a class="header-anchor" href="#skybox"><span>SkyBox</span></a></h3><ul><li>Background Setup: Sets up a skybox as the background of a 3D scene using six images (right, left, top, bottom, front, back).</li><li>Texture Loading: Loads cube textures using Three.js&#39;s CubeTextureLoader.</li><li>Seamless Integration: Easily integrates with the scene to provide realistic backgrounds.</li></ul><h3 id="model-loader" tabindex="-1"><a class="header-anchor" href="#model-loader"><span>Model Loader</span></a></h3><ul><li>Model Loading: Loads 3D models into a specified scene.</li><li>Caching Mechanism: Utilizes IndexedDB for caching models, reducing load times on subsequent requests.</li><li>Asynchronous Loading: Fetches models asynchronously using the fetch API and parses them into Three.js objects.</li><li>Callback Function: Provides a loaded event to notify when the model has been successfully loaded and added to the scene.</li></ul><h3 id="popup" tabindex="-1"><a class="header-anchor" href="#popup"><span>Popup</span></a></h3><ul><li>Custom Popups: Creates popups that can contain custom Vue components.</li><li>Positioning and Movement: Allows popups to be positioned in 3D space and moved smoothly over a specified duration.</li><li>CSS2D Integration: Uses Three.js&#39;s CSS2DRenderer to render HTML elements within the 3D scene.</li><li>Lifecycle Management: Manages popup lifecycle through methods like create, moveTo, and update.</li></ul>`,12))])}const f=r(h,[["render",g],["__file","getting-started.html.vue"]]),b=JSON.parse('{"path":"/guide/getting-started.html","title":"Getting Started","lang":"en-US","frontmatter":{"lang":"en-US","title":"Getting Started"},"headers":[{"level":2,"title":"Introduce","slug":"introduce","link":"#introduce","children":[]},{"level":2,"title":"Install Three.js","slug":"install-three-js","link":"#install-three-js","children":[]},{"level":2,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[{"level":3,"title":"Scene Management","slug":"scene-management","link":"#scene-management","children":[]},{"level":3,"title":"SkyBox","slug":"skybox","link":"#skybox","children":[]},{"level":3,"title":"Model Loader","slug":"model-loader","link":"#model-loader","children":[]},{"level":3,"title":"Popup","slug":"popup","link":"#popup","children":[]}]}],"git":{"updatedTime":1739367367000,"contributors":[{"name":"Shing","username":"Shing","email":"sunquakes@outlook.com","commits":1,"url":"https://github.com/Shing"},{"name":"Shing Rui","username":"Shing Rui","email":"sunquakes@outlook.com","commits":4,"url":"https://github.com/Shing Rui"}]},"filePathRelative":"guide/getting-started.md"}');export{f as comp,b as data};
