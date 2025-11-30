import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  title: "StarRailAssistant Community Edition",
  description: "A Community Edition of StarRailAssistant",
  head: [
    ['link', { rel: 'icon', href: '/SRAIcon.png' }],
    ['meta', { property: 'og:title', content: 'StarRailAssistant Community Edition' }],
    ['meta', { property: 'og:description', content: 'A Community Edition of StarRailAssistant' }]
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
});

// https://vitepress.dev/reference/site-config
export default defineConfig(teekConfig)
