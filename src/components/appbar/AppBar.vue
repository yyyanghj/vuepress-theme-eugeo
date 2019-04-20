<template>
  <header class="app-bar" :class="{hidden: isHidden}">
    <Menu/>
    <router-link class="home-link" to="/">
      <img class="logo" v-if="$themeConfig.logo" :src="$withBase($themeConfig.logo)" alt="logo">
      <h1 class="title">{{$siteTitle}}</h1>
    </router-link>
    <span class="spacer"></span>
    <Navigation/>
    <themeSwitch/>
  </header>
</template>

<script>
import Menu from './Menu';
import themeSwitch from './themeSwitch';
import Navigation from '../Navigation';

export default {
  name: 'AppBar',
  components: {
    Menu,
    Navigation,
    themeSwitch
  },
  props: {
    isHidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus" scoped>
.app-bar {
  position: fixed;
  top: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  padding: 0 spacer(3);
  width: inherit;
  height: $appBarHeight;
  border-bottom: 1px solid $borderColor;
  background-color: $widgetBgColor;
  opacity: 1;
  transition: transform 450ms ease, opacity 150ms;

  &.hidden {
    opacity: 0.5;
    transform: translateY(-110%);
  }

  .menu {
    margin-left: -1 * spacer(3);
  }

  .home-link {
    display: flex;
    align-items: center;

    .title {
      color: $titleColor;
      font-size: 24px;
      cursorPointer();
    }

    .logo {
      display: block;
      margin-right: spacer(2);
      max-width: 80px;
      max-height: 40px;
    }
  }

  .spacer {
    flex: 1;
  }

  .theme-switch {
    margin-left: spacer(3);
  }

  @media (max-width: $MQMobile - 1) {
    .nav {
      display: none;
    }
  }
}
</style>
