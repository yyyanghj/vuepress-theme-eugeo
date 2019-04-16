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
      permalink: '/posts/',
      frontmatter: {
        title: `Posts`,
        layout: 'Posts'
      }
    },
    {
      permalink: '/archive/',
      frontmatter: {
        title: `Archives`,
        layout: 'Archive'
      }
    }
  ];

  return {
    name: 'eugeo-blog-plugin',

    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),

    async ready() {
      await Promise.all(extraPages.map(page => ctx.addPage(page)));
    }
  };
};
