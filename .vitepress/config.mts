import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  // Teek 主题特定配置可以放这里
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
  themeConfig: {
    logo: '/SRAIcon.png',
    siteTitle: 'StarRailAssistant CE',
    nav: [
      { text: '主页', link: '/' },
      { text: '开始使用', link: '/docs/getting-started'},
      { text: '下载', link: '/pages/download' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
