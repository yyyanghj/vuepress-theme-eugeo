---
title: 主题配置说明
date: 2019-03-27
category: eugeo
tags:
  - doc
  - VuePress
banner: https://i.loli.net/2019/04/13/5cb15fba0fbae.jpg
---

Eugeo 主题的配置说明文档

<!-- more -->

### themeConfig

```js
// .vuepress/config.js

module.exports = {
  // 导航栏上显示的名称
  title: 'Eugeo',

  theme: 'eugeo',

  themeConfig: {
    // 日期显示格式, 格式参考 https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#displaying
    formatDate: 'MMM D, YYYY',

    // logo
    logo: '/img/coolyang.jpg',

    // 增加的导航项, icon需要iconfont的svg图标
    nav: [{ link: '/about', text: 'About', icon: 'iconname', exact: true }],

    // 底部 footer 组件名
    footer: 'TheFooter',

    // profile，个人信息, 可选
    profile: {
      avatar: '/img/logo.png',
      name: 'Coolyang',
      bio: 'Less is More.',
      location: 'XiaMen',
      email: '504575307@qq.com'
    },

    // 社交媒体帐号, 可选
    sns: {
      github: 'xxxx',
      zhihu: 'xxxx',
      qq: 'xxxx',
      linkedin: 'xxxx',
      instagram: 'xxxx',
      facebook: 'xxxx',
      twitter: 'xxxx',
      weibo: 'xxxx',
      youtube: 'xxxx',
      gmail: 'xxxx',
      pinterest: 'xxxx',
      medium: 'xxxx',
      leetcode: 'xxxx',
      cloudmusic: 'xxxx',
      codecademy: 'xxxx',
      stackoverflow: 'xxxx',
      juejin: 'xxxx',
      segmentfault: 'xxxx',
      pixiv: 'xxxx'
    },

    // 使用 vssue 做评论系统, 配置参考 https://vssue.js.org/, 若为false则关闭vssue
    comments: {
      platform: 'github',
      owner: 'Coolyang1996',
      repo: 'Coolyang.github.io',
      clientId: 'xxxx',
      clientSecret: 'xxxx',
      autoCreatIssue: process.env.NODE_ENV !== 'development'
    },

    // 搜索建议最大显示条数
    maxSuggestions: 5,

    // 全局版权声明
    copyright: {
      author: 'Coolyang',
      license: '自由转载-非商用-禁止演绎-保持署名（CC BY-NC-ND 4.0）',
      link: '默认值为当前页面url'
    },

    // 打赏
    reward: {
      text: 'Buy me a cup of coffee ☕.',
      methods: {
        wechat: '/img/pay-wechat.png',
        alipay: '/img/pay-zhifubao.png'
      }
    }
  }
};
```

### frontmatter

```md
---

<!-- 标题 -->

title: 主题配置说明

<!-- 发布时间 -->

date: 2019-01-15

<!-- 标签 -->

tags:

- MVVM
- Vue

<!-- 分类 -->

category: 前端

<!-- 封面图片, 也可以用数组语法 -->

banner: '/img/2.jpg'

<!-- 版权声明, 默认为false禁用, 也可以使用对象语法覆盖全局配置 -->

copyright: true

<!-- 打赏, 默认为false禁用 -->

reward: true

<!-- 底部 footer 组件名 -->

footer: TheFooter

---一段文章摘要, 在 `frontmatter` 和 `<!-- more -->` 之间的内容即为摘要
会在 postCard 卡片中渲染. 剩下的内容只有进入页面才会渲染

<!-- more -->

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
