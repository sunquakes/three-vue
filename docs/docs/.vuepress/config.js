import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

const children = ['getting-started', 'scene', 'sky-box', 'model-loader', 'popup']

export default defineUserConfig({
  lang: 'en-US',

  title: 'Three Vue3',
  description: 'A vue3.x component library of Three.js.',

  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'sunquakes/three-vue3',
    editLinks: true,
    sidebarDepth: 0,
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
              children: children
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
              children: children
            }
          ]
        }
      }
    }
  }),

  locales: {
    '/': {
      lang: 'English',
      title: 'Three Vue3',
      description: 'A vue3.x component library of Three.js.'
    },
    '/zh/': {
      lang: '简体中文',
      title: 'Three Vue3',
      description: '一个Three.js的vue3.x组件库。'
    }
  },

  bundler: viteBundler()
})
