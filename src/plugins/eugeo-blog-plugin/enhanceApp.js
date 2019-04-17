export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts() {
        const { pages } = this.$site;
        const sort = (pageA, pageB) => {
          let { order: orderA = 0, date: dateA } = pageA.frontmatter;
          let { order: orderB = 0, date: dateB } = pageB.frontmatter;

          if (dateA > dateB) {
            orderA++;
          } else {
            orderB++;
          }

          return orderB - orderA;
        };

        return pages.filter(p => p.type === 'post').sort(sort);
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
