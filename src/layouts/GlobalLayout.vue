<template>
  <div class="theme-container">
    <SideBar :isHidden="state.isSideBarHidden"/>
    <main class="main">
      <AppBar :isHidden="isAppBarHidden"/>
      <transition appear name="fade" mode="out-in">
        <component :is="layout" class="container" :key="$route.path"></component>
      </transition>
      <component :is="footerBar" class="footer"></component>
    </main>

    <BackToTop :isHidden="isBackToTopHidden"/>
  </div>
</template>

<script>
import throttle from 'lodash/throttle';
import state from '@eugeo/store/';
import AppBar from '../components/appbar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import BackToTop from '../components/BackToTop';
import FooterBar from '../components/FooterBar';

export default {
  name: 'GlobalLayout',
  components: {
    AppBar,
    SideBar,
    BackToTop,
    FooterBar
  },
  data: () => ({
    state,
    scrollTop: 0,
    isAppBarHidden: false,
    isBackToTopHidden: true,
    threshold: 300
  }),
  computed: {
    layout() {
      const layout = this.$frontmatter.layout;

      if (layout) {
        return layout;
      }

      if (!this.$page.path) {
        return 'NotFound';
      }

      return 'Layout';
    },

    footerBar() {
      return (
        this.$frontmatter.footer || this.$themeConfig.footer || 'FooterBar'
      );
    }
  },
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll), 200);
  },
  watch: {
    $route() {
      state.isSideBarHidden = true;
    },
    scrollTop(newVal, oldVal) {
      const isOverstep = newVal >= this.threshold;
      this.isBackToTopHidden = !isOverstep;
      this.isAppBarHidden =
        newVal > oldVal && isOverstep && state.isSideBarHidden;
    }
  },
  methods: {
    closeSideBar() {
      state.isSideBarHidden = true;
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  }
};
</script>

<style lang="stylus">
.theme-container {
  overflow: hidden;

  .main {
    position: relative;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-top: $appBarHeight;
    min-height: 100vh;
    width: 100vw;
    transition: all 450ms ease;

    .container {
      flex: 1;
      margin: spacer(3) auto;
      width: 100%;
    }

    .footer {
      min-height: 88px;
    }
  }

  .side-bar {
    &:not(.hidden) + .main {
      left: $sideBarWidth;
    }

    @media (min-width: $MQNarrow) {
      border-right: 1px dashed $borderColor;

      &:not(.hidden) + .main {
        width: 'calc(100vw - %s )' % $sideBarWidth;
      }
    }
  }

  .fade {
    &-enter-active {
      animation: fade 450ms ease-in-out;
    }

    &-leave-active {
      animation: fade 450ms ease-in-out reverse;
    }
  }
}
</style>
