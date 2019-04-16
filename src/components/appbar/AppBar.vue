<template>
  <header class="app-bar" :class="{hidden: isHidden}">
    <Menu/>
    <router-link tag="h1" class="title" :to="$withBase('/')">{{$siteTitle}}</router-link>
    <span class="spacer"></span>
    <SearchBox/>
    <themeIcon/>
  </header>
</template>

<script>
import Menu from './Menu';
import themeIcon from './themeIcon';
import SearchBox from './SearchBox';

export default {
  name: 'AppBar',
  components: {
    Menu,
    themeIcon,
    SearchBox
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
    margin-left: -24px;
  }

  .title {
    color: $titleColor;
    font-size: 24px;
    cursorPointer();
  }

  .spacer {
    flex: 1;
  }

  .search-box {
    margin-right: spacer(3);

    @media (max-width: $MQMobile) {
      margin-right: spacer();

      & >>> .search-input:focus {
        width: 160px;
      }
    }
  }
}
</style>
