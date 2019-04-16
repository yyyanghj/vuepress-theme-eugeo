<template>
  <div :class="{close: !state.isSideBarHidden}" class="menu" @click="handleMenuClick">
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    <span class="hamburger"></span>
  </div>
</template>

<script>
import state from '@eugeo/store/';

export default {
  name: 'Menu',
  data: () => ({
    state
  }),
  methods: {
    handleMenuClick() {
      state.isSideBarHidden = !state.isSideBarHidden;
    }
  }
};
</script>

<style lang="stylus" scoped>
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursorPointer();

  .hamburger {
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: $titleColor;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    transform-origin: center center;

    &:nth-child(1) {
      transform: translateY(-6px);
    }

    &:nth-child(3) {
      transform: translateY(6px);
    }
  }

  &.close {
    .hamburger:nth-child(1) {
      transform: rotate(135deg);
    }

    .hamburger:nth-child(2) {
      opacity: 0;
      transform: scale(0.1);
    }

    .hamburger:nth-child(3) {
      transform: rotate(-135deg);
    }
  }
}
</style>
