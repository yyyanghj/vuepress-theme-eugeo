<template>
  <header class="app-bar" :class="{hidden: isHidden}">
    <Menu/>
    <router-link tag="h1" class="title" :to="$withBase('/')">{{$siteTitle}}</router-link>
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
  left: 0;
  z-index: 24;
  display: flex;
  align-items: center;
  padding: 0 spacer(3);
  width: 100%;
  height: $appBarHeight;
  background-color: $widgetBgColor;
  opacity: 1;
  transition: transform 450ms ease, opacity 150ms ease;
  shadow();

  &.hidden {
    opacity: 0.5;
    transform: translateY(-110%);
  }

  .menu {
    margin-left: -1 * spacer(3);
  }

  .title {
    color: $titleColor;
    font-size: 24px;
    cursorPointer();
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
