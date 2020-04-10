const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);
const addStyleResource = rule => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [resolve('./styles/_mixins.styl'), resolve('./styles/_variables.styl')]
    });
};

module.exports = (opts, ctx) => {
  const { comments = false, maxSuggestions = 5, perPage = 6 } = opts;

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        layout: 'Home',
        itemLayout: 'Post'
      }
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tag',
        frontmatter: { title: 'Tag' }
      },
      {
        id: 'category',
        keys: ['category', 'categories'],
        path: '/category/',
        layout: 'Categories',
        scopeLayout: 'Category',
        frontmatter: { title: 'Category' }
      }
    ],
    globalPagination: {
      layout: 'Home'
    }
  };

  const extraPages = [
    {
      title: 'Home',
      permalink: '/',
      frontmatter: {
        title: 'Home',
        layout: 'Home'
      }
    },
    {
      permalink: '/archive/',
      frontmatter: {
        title: `Archive`,
        layout: 'Archive'
      }
    }
  ];

  return {
    name: 'vuepress-theme-eugeo',

    globalLayout: resolve('./layouts/GlobalLayout.vue'),

    enhanceAppFiles: resolve('./enhanceApp.js'),

    devTemplate: resolve('./template/dev.html'),
    ssrTemplate: resolve('./template/ssr.html'),

    define: {
      MAX_SUGGESTIONS: maxSuggestions,
      PER_PAGE: perPage
    },

    plugins: [
      'smooth-scroll',
      'vuepress-plugin-reading-time',
      'permalink-pinyin',
      '@vuepress/blog',
      '@vuepress/container',
      '@vuepress/nprogress',
      '@vuepress/medium-zoom',
      '@vuepress/last-updated',
      '@vuepress/active-header-links',
      ['@vuepress/blog', defaultBlogPluginOptions],
      ['@vssue/vssue', comments],
      [('@vuepress/container', { type: 'tip' })],
      ['@vuepress/container', { type: 'warning' }],
      ['@vuepress/container', { type: 'danger' }]
    ],

    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), { label: true });
    },

    chainWebpack(config, isServer) {
      if (isServer === false) {
        config.node.set('Buffer', false);
      }

      const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
      types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)));
      config.resolve.alias.set('@eugeo', __dirname);
      return config;
    },

    async ready() {
      await Promise.all(extraPages.map(page => ctx.addPage(page)));
    }
  };
};
