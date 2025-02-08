import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Three Vue',
  description: 'A vue3.x component library of Three.js.',

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'sunquakes/three-vue',
    editLinks: true,
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        navbar: [{ text: 'Guide', link: '/guide/getting-started' }],
        sidebar: {
          '/guide/': [
            {
              children: [
                '/guide/getting-started.md',
                '/guide/scene.md',
                '/guide/sky-box.md',
                '/guide/model-loader.md',
                '/guide/popup.md'
              ]
            }
          ]
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        navbar: [{ text: '指南', link: '/zh/guide/getting-started' }],
        sidebar: {
          '/zh/guide/': [
            {
              children: [
                '/zh/guide/getting-started.md',
                '/zh/guide/scene.md',
                '/zh/guide/sky-box.md',
                '/zh/guide/model-loader.md',
                '/zh/guide/popup.md'
              ]
            }
          ]
        }
      }
    }
  }),

  locales: {
    '/': {
      lang: 'English',
      title: 'Three Vue',
      description: 'A vue3.x component library of Three.js.'
    },
    '/zh/': {
      lang: '简体中文',
      title: 'Three Vue',
      description: '一个Three.js的vue3.x组件库。'
    }
  },

  bundler: viteBundler()
})
