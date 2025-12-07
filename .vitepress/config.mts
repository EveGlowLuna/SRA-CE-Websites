import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  footerInfo: {
    copyright: {
      createYear: 2025,
      suffix: "StarRailAssistant CE",
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "StarRailAssistant Community Edition",
  titleTemplate: false,
  description: "A Community Edition of StarRailAssistant",
  head: [
    ['link', { rel: 'icon', href: '/SRAIcon.png' }],
    ['meta', { property: 'og:title', content: 'StarRailAssistant Community Edition' }],
    ['meta', { property: 'og:description', content: 'A Community Edition of StarRailAssistant' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'SRA CE' }]
  ],
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        logo: '/SRAIcon.png',
        siteTitle: 'StarRailAssistant CE',
        nav: [
          { text: '主页', link: '/' },
          { text: '开始使用', link: '/docs/开始使用'},
          { text: '下载', link: '/pages/download' }
        ],
        sidebar: [
          { text: '开始使用', link: '/docs/开始使用'},
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "StarRailAssistant Community Edition",
      description: "A Community Edition of StarRailAssistant",
      themeConfig: {
        logo: '/SRAIcon.png',
        siteTitle: 'StarRailAssistant CE',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/docs/getting-started'},
          { text: 'Download', link: '/en/pages/download' }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    }
  }
})
