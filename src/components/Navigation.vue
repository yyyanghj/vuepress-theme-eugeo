<template>
  <nav class="nav">
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
  name: 'Navigation',
  computed: {
    navItems() {
      /*  const items = [
        { link: '/', text: 'Home', icon: 'home', exact: true },
        { link: '/archive/', text: 'Archive', icon: 'folder', exact: true }
      ]; */

      return this.$themeConfig.nav || [];
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
