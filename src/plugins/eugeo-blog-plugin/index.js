const path = require('path');

module.exports = (opts = {}, ctx) => {
  const extraPages = [
    {
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
    name: 'eugeo-blog-plugin',

    enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),

    async ready() {
      await Promise.all(extraPages.map(page => ctx.addPage(page)));
    }
  };
};
