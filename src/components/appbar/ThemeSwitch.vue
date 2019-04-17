<template>
  <ClientOnly>
    <div class="theme-switch">
      <label class="switch-label" for="theme-switch">
        <v-icon class="icon" name="sun"></v-icon>
        <v-icon class="icon" name="moon"></v-icon>
        <input checked id="theme-switch" type="checkbox" class="switch-input" v-model="isDark">
        <span class="switch-thumb"></span>
      </label>
    </div>

    <!-- <v-icon class="theme-icon" :name="themeIcon" @click.native="toggleTheme"></v-icon> -->
  </ClientOnly>
</template>

<script>
export default {
  name: 'ThemeIcon',
  data: () => ({
    isDark: false
  }),
  computed: {
    themeName() {
      return this.isDark ? 'dark' : 'light';
    }
  },
  mounted() {
    document.body.dataset.theme = this.themeName;
    this.isDark = window.localStorage.getItem('themeName') === 'dark';
  },
  watch: {
    themeName(themeName) {
      document.body.dataset.theme = themeName;
      window.localStorage.setItem('themeName', themeName);
    }
  }
  /* methods: {
    toggleTheme() {
      this.isLight = !this.isLight;
    }
  } */
};
</script>

<style lang="stylus" scoped>
.theme-switch {
  .switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;

    // display: none;
    &:checked ~ .switch-thumb {
      transform: translateX(100%);
    }
  }

  .switch-label {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    width: 48px;
    height: 20px;
    border-radius: 10px;
    background-color: $bgColor;
    cursorPointer();
  }

  .switch-thumb {
    position: absolute;
    left: 0;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: $accentColor;
    transition: all 300ms ease;
    transform: translateX(0);
  }

  .icon {
    color: #fddc38;
    font-size: 16px;
  }
}
</style>
