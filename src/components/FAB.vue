<template>
  <div class="floating-action-button" @touchmove.prevent="void 0">
    <div class="menu">
      <input type="checkbox" class="menu-open" id="menu-open">

      <label class="menu-btn" for="menu-open">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </label>

      <a class="menu-item sider-ctrl" @click="$emit('toggleSider')">
        <v-icon name="sidebar"></v-icon>
      </a>
      <a class="menu-item" @click="backToTop">
        <v-icon name="top"></v-icon>
      </a>
      <a class="menu-item" @click="goToBottom">
        <v-icon name="down"></v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAB',
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    goToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
$distance = -60px;

ball() {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: $accentColor;
  color: $white;
}

.floating-action-button {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 12;

  .menu {
    position: relative;
    width: 42px;
    height: 42px;
  }

  .menu-open {
    display: none;
  }

  .menu-btn {
    ball();
    z-index: 1;
    flex-direction: column;
    transition: transform 300ms ease;
    cursorPointer();

    &:hover {
      transform: scale(1.2, 1.2);
    }

    .hamburger {
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: $white;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      transform-origin: center center;

      &:nth-child(1) {
        transform: translateY(-6px);
      }

      &:nth-child(3) {
        transform: translateY(6px);
      }
    }
  }

  .menu-open:checked {
    & + .menu-btn {
      transform: scale(0.9, 0.9);

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

    &~.menu-item {
      &:nth-child(3) {
        transition-delay: 0ms;
        transform: translate3d(0.86 * $distance, -0.5 * $distance, 0);
      }

      &:nth-child(4) {
        transition-delay: 75ms;
        transform: translate3d(0.86 * $distance, 0.5 * $distance, 0);
      }

      &:nth-child(5) {
        transition-delay: 150ms;
        transform: translate3d(0, $distance, 0);
      }

      &:nth-child(6) {
        transition-delay: 225ms;
        transform: translate3d(-0.86 * $distance, 0.5 * $distance, 0);
      }
    }
  }

  .menu-item {
    ball();
    transition: all 200ms ease-in;
  }

  @media (min-width: $MQNarrow) {
    .sider-ctrl {
      display: none !important;
    }
  }

  @media (max-width: $MQMobile) {
    right: 55px;
    bottom: 35px;
  }
}
</style>
