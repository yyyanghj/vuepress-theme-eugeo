<template>
  <aside class="side-bar" :class="{ hidden: isHidden }">
    <SearchBox/>
    <Profile/>
    <PostInfo/>
    <Navigation/>
  </aside>
</template>

<script>
import state from '@eugeo/store/';
import SearchBox from './SearchBox';
import Profile from './Profile';
import PostInfo from './PostInfo';
import Navigation from '../Navigation';

export default {
  name: 'SideBar',
  components: {
    Profile,
    PostInfo,
    SearchBox,
    Navigation
  },
  props: {
    isHidden: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 16;
  overflow-y: auto;
  padding-top: $appBarHeight;
  // padding-bottom: 64px;
  width: $sideBarWidth;
  height: 100vh;
  background-color: $bgColor;
  transition: transform 450ms ease;
  -webkit-overflow-scrolling: touch;

  &.hidden {
    transform: translateX(-100%);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .profile, .post-info, .nav, .search-box {
    margin: spacer(2) spacer();
  }

  .search-box {
    margin-top: spacer(1.5);
  }

  .nav {
    flex-direction: column;
    align-items: stretch;
  }

  @media (min-width: $MQMobile) {
    .nav {
      display: none;
    }
  }
}
</style>
