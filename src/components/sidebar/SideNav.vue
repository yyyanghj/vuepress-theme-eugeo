<template>
  <nav class="side-nav">
    <router-link
      class="nav-item"
      :exact="item.exact"
      active-class="active"
      :to="item.link"
      v-for="(item, index) of navItems"
      :key="index"
    >
      <v-icon v-if="item.icon" class="icon" :name="item.icon"></v-icon>
      <span class="text">{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'SideNav',
  computed: {
    navItems() {
      const items = [
        { link: '/', text: 'Home', icon: 'home', exact: true },
        { link: '/posts/', text: 'Posts', icon: 'article', exact: false },
        { link: '/archive/', text: 'Archive', icon: 'folder', exact: true }
      ];
      return [...items, ...(this.$themeConfig.nav || [])];
    }
  }
};
</script>

<style lang="stylus" scoped>
.side-nav {
  .nav-item {
    widget();
    display: flex;
    align-items: center;
    margin-bottom: spacer();
    padding: spacer() spacer(2);
    width: 75%;
    border-radius: $baseRadius * 0.5;
    transition: width 450ms ease;

    .icon {
      margin-right: spacer(1.5);
    }

    &:hover, &.active {
      width: 100%;
      color: $accentColor;
    }
  }
}
</style>
