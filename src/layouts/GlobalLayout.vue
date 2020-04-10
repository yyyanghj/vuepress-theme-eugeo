<template>
  <div class="theme-container">
    <SideBar :isHidden="store.isSideBarHidden" />
    <main class="main">
      <AppBar :isHidden="isAppBarHidden" />
      <transition appear mode="out-in" name="fade">
        <div :key="$route.path" class="container">
          <DefaultGlobalLayout />
        </div>
      </transition>
      <component :is="footerBar" class="footer"></component>
    </main>

    <BackToTop :isHidden="isBackToTopHidden" />
  </div>
</template>

<script>
import throttle from 'lodash/throttle';
import AppBar from '../components/appbar/AppBar';
import SideBar from '../components/side-bar/SideBar';
import BackToTop from '../components/BackToTop';
import FooterBar from '../components/FooterBar';
import DefaultGlobalLayout from '@app/components/GlobalLayout';

export default {
  name: 'GlobalLayout',
  components: {
    AppBar,
    SideBar,
    BackToTop,
    FooterBar,
    DefaultGlobalLayout
  },
  data: () => ({
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
      return this.$frontmatter.footer || this.$themeConfig.footer || 'FooterBar';
    }
  },
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll), 200);
  },
  watch: {
    $route() {
      this.store.isSideBarHidden = true;
    },
    scrollTop(newVal, oldVal) {
      const isOverstep = newVal >= this.threshold;
      this.isBackToTopHidden = !isOverstep;
      this.isAppBarHidden = newVal > oldVal && isOverstep && this.store.isSideBarHidden;
    }
  },
  methods: {
    closeSideBar() {
      this.store.isSideBarHidden = true;
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

      & > * {
        margin-right: auto;
        margin-left: auto;
      }
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
