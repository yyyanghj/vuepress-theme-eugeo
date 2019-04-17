<template>
  <div class="theme-container">
    <AppBar :isHidden="isAppBarHidden"/>

    <SideBar :isHidden="state.isSideBarHidden"/>
    <main class="main">
      <transition appear name="fade" mode="out-in">
        <component :is="layout" class="container" :key="$route.path"></component>
      </transition>
    </main>

    <component :is="footerBar" class="footer"></component>

    <BackToTop :isHidden="isBackToTopHidden"/>

    <div v-show="!state.isSideBarHidden" class="mask" @click.stop="closeSideBar" @touchmove.prevent="void 0"></div>
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  min-height: 100vh;

  .main {
    flex: 1;
    overflow: hidden;
    margin-top: $appBarHeight;
    padding: spacer(3) 0;
  }

  .container {
    margin: 0 auto;
  }

  .footer {
    position: relative;
    z-index: 8;
    min-height: 88px;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.5);
    backdrop-filter: blur(5px);
  }

  .fade {
    &-enter-active {
      animation: fade 450ms ease-in-out;
    }

    &-leave-active {
      animation: fade 450ms ease-in-out reverse;
    }
  }

  @media (min-width: $MQNarrow) {
    .app-bar {
      opacity: 1 !important;
      transform: translateY(0) !important;

      .menu {
        display: none;
      }
    }

    .side-bar {
      padding-top: $appBarHeight;
      background: transparent;
      transform: translateX(0) !important;
    }

    .main {
      margin-left: $sideBarWidth;
      border-left: 1px dashed $borderColor;
    }
  }
}
</style>
