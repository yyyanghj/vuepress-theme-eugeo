<template>
  <ClientOnly>
    <v-icon class="theme-icon" :name="themeIcon" @click.native="toggleTheme"></v-icon>
  </ClientOnly>
</template>

<script>
export default {
  name: 'ThemeIcon',
  data: () => ({
    isLight: true
  }),
  computed: {
    themeName() {
      return this.isLight ? 'light' : 'dark';
    },
    themeIcon() {
      return this.isLight ? 'sun' : 'moon';
    }
  },
  mounted() {
    document.body.dataset.theme = this.themeName;
    this.isLight = window.localStorage.getItem('themeName') !== 'dark';
  },
  watch: {
    themeName(themeName) {
      document.body.dataset.theme = themeName;
      window.localStorage.setItem('themeName', themeName);
    }
  },
  methods: {
    toggleTheme() {
      this.isLight = !this.isLight;
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-icon {
  color: #d9bb26;
  font-size: 20px;
  cursorPointer();
}
</style>
