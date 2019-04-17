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
  z-index: 12;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: $appBarHeight;
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
    flex-shrink: 0;
    margin: spacer();
  }

  .search-box {
    margin-top: spacer(1.5);
  }

  .nav {
    flex: 1;
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
