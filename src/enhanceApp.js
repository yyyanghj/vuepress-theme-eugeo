import { ripple } from './directives/';
import VueLazyload from 'vue-lazyload';
import dayjs from 'dayjs';
/* import '@eugeo/assets/font/iconfont.js'; */
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(Vuetify);
  Vue.directive('ripple', ripple);
  Vue.use(VueLazyload);

  const { pages } = siteData;
  const posts = pages
    .filter(p => p.id === 'post')
    .sort((a, b) => {
      return dayjs(a.frontmatter.date).isAfter(dayjs(b.frontmatter.date)) ? -1 : 1;
    });

  const store = Vue.observable({
    isSideBarHidden: true
  });

  Vue.mixin({
    data() {
      return {
        store
      };
    },
    computed: {
      $posts() {
        return posts;
      },
      $prev() {
        if (this.$page.type !== 'post') {
          return null;
        }
        const index = this.$posts.findIndex(post => {
          return this.$page.key === post.key;
        });
        return this.$posts[index + 1] || null;
      },
      $next() {
        if (this.$page.type !== 'post') {
          return null;
        }
        const index = this.$posts.findIndex(post => {
          return this.$page.key === post.key;
        });
        return this.$posts[index - 1] || null;
      }
    }
  });
};
