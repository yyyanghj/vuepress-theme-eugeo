<template>
  <nav class="nav">
    <template v-for="item of navItems">
      <router-link
        v-if="!isExternal(item.link)"
        class="nav-item"
        :exact="item.exact"
        active-class="active"
        :to="item.link"
        :key="item.link"
      >
        <v-icon v-if="item.icon" class="icon" :name="item.icon"></v-icon>
        <span class="text">{{ item.text }}</span>
      </router-link>

      <a v-else class="nav-item" :href="item.link" target="_blank" rel="noopener noreferrer" :key="item.link">
        <v-icon v-if="item.icon" class="icon" :name="item.icon"></v-icon>
        <span class="text">{{ item.text }}</span>
      </a>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    navItems() {
      return this.$themeConfig.nav || [];
    }
  },
  methods: {
    isExternal(link) {
      return /^http/.test(link);
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-item {
    display: block;
    padding: spacer() spacer(2);
    font-size: 16px;

    &.active {
      color: $accentColor;
    }

    .icon {
      margin-right: spacer(0.5);
    }
  }
}
</style>
