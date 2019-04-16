<template>
  <aside class="side-bar" :class="{ hidden: isHidden }">
    <Profile/>
    <PostInfo/>
    <SideNav/>
  </aside>
</template>

<script>
import state from '@eugeo/store/';
import Profile from './Profile';
import PostInfo from './PostInfo';
import SideNav from './SideNav';

export default {
  name: 'SideBar',
  components: {
    Profile,
    PostInfo,
    SideNav
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
  padding-bottom: 64px;
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

  .profile, .post-info, .side-nav {
    margin: spacer();
  }

  .profile {
    margin-top: spacer(2);
  }
}
</style>
