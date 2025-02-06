import { CodeTabs } from "E:/new/vue-threejs/docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_2a38e00ca3ecd243e71571d437818290/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/new/vue-threejs/docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_2a38e00ca3ecd243e71571d437818290/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/new/vue-threejs/docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_2a38e00ca3ecd243e71571d437818290/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
