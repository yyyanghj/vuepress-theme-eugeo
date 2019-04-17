const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  title: 'Eugeo',
  theme: resolve('../../src'),
  description: `A theme for VuePress`,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/vuepress-theme-eugeo',
  host: '192.168.101.33',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    dataFormat: 'MMM D, YYYY',
    nav: [{ link: '/', text: 'Home', icon: 'home', exact: true }],

    profile: {
      avatar: '/img/coolyang.jpg',
      nickname: 'Coolyang',
      bio: 'Less is More.',
      location: 'XiaMen',
      email: '504575307@qq.com'
    },

    sns: {
      github: 'https://github.com/Coolyang1996',
      zhihu: 'https://www.zhihu.com/people/yang-hong-jian-31-1/activities',
      cloudmusic: 'https://music.163.com/#/user/home?id=61088871',
      juejin: 'https://juejin.im/user/5affadb25188251cee0c8ae1'
      // weibo: 'https://weibo.com/2213684753/profile'
    },

    comments: false,

    copyright: {
      author: 'Coolyang'
    },

    reward: {
      text: 'Buy me a cup of coffee ☕.',
      methods: {
        wechat: '/img/pay-wechat.png',
        alipay: '/img/pay-zhifubao.png'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
};
