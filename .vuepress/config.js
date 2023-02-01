const plugins = require("./config/plugins");

module.exports = {
  title: "y1_cheng",
  description: "y1_cheng 's blog",
  dest: "./dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    // 移动端适配
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Docs",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/SickleAShuriken",
            icon: "reco-github",
          },
        ],
      },
    ],
    // 左侧边栏
    // sidebar: {
    //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    // },
    // 右侧侧边栏全局开启
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    type: "blog",
    // 博客配置
    blogConfig: {
      category: {
        location: 2, //在导航栏菜单中从左至右所占的位置，默认2
        text: "Category", //默认文案 “分类”
      },
      tag: {
        location: 3, //在导航栏菜单中从左至右所占的位置，默认3
        text: "Tag", //默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/SickleAShuriken" },
      ],
    },
    // 友链
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "y1_cheng",
    authorAvatar: "/avatar.jpg",
    record: "y1_cheng 's blog",
    startYear: "2023",
  },
  plugins: plugins,
  markdown: {
    lineNumbers: true,
  },
};
