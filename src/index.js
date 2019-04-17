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
      ['@vssue/vssue', comments],
      ['@vuepress/container', { type: 'tip' }],
      ['@vuepress/container', { type: 'warning' }],
      ['@vuepress/container', { type: 'danger' }],
      [require('./plugins/eugeo-blog-plugin')]
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
    }
  };
};
