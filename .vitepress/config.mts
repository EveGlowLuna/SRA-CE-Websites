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
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/SRAIcon.png' }],
    ['meta', { property: 'og:title', content: 'StarRailAssistant Community Edition' }],
    ['meta', { property: 'og:description', content: 'A Community Edition of StarRailAssistant' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'SRA CE' }]
  ],
  
  themeConfig: {
    logo: '/SRAIcon.png',
    siteTitle: 'StarRailAssistant CE',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: {
      level: [2, 4],
      label: '本页导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '开始使用',
        link: '/docs/快速上手/开始使用',
        activeMatch: '/docs/快速上手/',
      },
      {
        text: '参与开发',
        link: '/docs/参与开发/前置条件',
        activeMatch: '/docs/参与开发/',
      },
      { text: '下载', link: '/pages/download' }
    ],
    sidebar: {
      '/docs/快速上手/': [
        {
          text: '快速上手',
          items: [
            { text: '开始使用', link: '/docs/快速上手/开始使用' },
            { text: '其他操作', link: '/docs/快速上手/其他操作' },
          ]
        }
      ],
      '/docs/参与开发/': [
        {
          text: '参与开发',
          items: [
            { text: '前置条件', link: '/docs/参与开发/前置条件' },
            { text: '编写规范', link: '/docs/参与开发/编写规范' },
            { text: 'API', link: '/docs/参与开发/API' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EveGlowLuna/StarRailAssistant-CommunityEdition' }
    ]
  },

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "StarRailAssistant Community Edition",
      description: "A Community Edition of StarRailAssistant",
      themeConfig: {
        darkModeSwitchLabel: 'Theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        outline: {
          level: [2, 4],
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Getting Started',
            link: '/en/docs/getting-started/installation',
            activeMatch: '/en/docs/getting-started/',
          },
          {
            text: 'Development',
            link: '/en/docs/development/prerequisites',
            activeMatch: '/en/docs/development/',
          },
          { text: 'Download', link: '/en/pages/download' }
        ],
        sidebar: {
          '/en/docs/getting-started/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Installation', link: '/en/docs/getting-started/installation' },
                { text: 'Advanced Usage', link: '/en/docs/getting-started/advanced-usage' },
              ]
            }
          ],
          '/en/docs/development/': [
            {
              text: 'Development',
              items: [
                { text: 'Prerequisites', link: '/en/docs/development/prerequisites' },
                { text: 'Coding Standards', link: '/en/docs/development/coding-standards' },
                { text: 'API Reference', link: '/en/docs/development/api' },
              ]
            }
          ],
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/EveGlowLuna/StarRailAssistant-CommunityEdition' }
        ]
      }
    }
  }
})
