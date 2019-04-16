<template>
  <section v-if="enabled" class="copyright">
    <p v-if="copyright.author">Author: &nbsp;{{copyright.author}}</p>
    <p>Link: &nbsp;{{copyright.link || link}}</p>
    <p>Copyright: &nbsp;{{copyright.license || license}}</p>
  </section>
</template>

<script>
import { isObject } from 'lodash';

export default {
  name: 'Copyright',
  data: () => ({
    link: '',
    license: '自由转载-非商用-禁止演绎-保持署名（CC BY-NC-ND 4.0）'
  }),
  computed: {
    enabled() {
      const cp = this.$frontmatter.copyright;
      if (!cp) {
        return false;
      }

      if (!isObject(cp) && !isObject(this.$themeConfig.copyright)) {
        return false;
      }

      return true;
    },
    copyright() {
      const cp = this.$frontmatter.copyright;
      return isObject(cp) ? cp : this.$themeConfig.copyright;
    }
  },
  mounted() {
    this.link = window.location.href;
  }
};
</script>

<style lang="stylus" scoped>
.copyright {
  padding: spacer(1.5) spacer(3);
  border-left: 4px solid #ff5370;
  background-color: $bgColor;
  font(15px);

  p:not(:first-child) {
    margin-top: spacer(0.5);
  }
}
</style>
